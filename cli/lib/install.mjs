import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const CORE = 'antislop'

export const AGENTS = [
  { id: 'claude', label: 'Claude Code', dir: '.claude/skills' },
  { id: 'antigravity', label: 'Antigravity', dir: '.agents/skills' },
  { id: 'codex', label: 'Codex', dir: '.codex/skills' },
]

export function skillSourceDir() {
  const bundled = path.join(__dirname, '..', 'skills')
  if (fs.existsSync(bundled)) return bundled
  const repo = path.join(__dirname, '..', '..', 'skills')
  if (fs.existsSync(repo)) return repo
  return null
}

function resolveBase(location) {
  return location === 'global' ? os.homedir() : process.cwd()
}

export function resolveTargets(location) {
  const base = resolveBase(location)
  return AGENTS.map((agent) => ({ agent, path: path.join(base, agent.dir) }))
    .filter((t) => {
      if (location === 'global') return true
      if (t.agent.id === 'claude') return true
      const parent = path.join(base, t.agent.dir.split('/')[0])
      return fs.existsSync(parent)
    })
    .map((t) => ({ ...t, exists: fs.existsSync(t.path) }))
}

export function detectConflicts({ skills, targets }) {
  const conflicts = []
  for (const t of targets) {
    for (const skill of skills) {
      if (fs.existsSync(path.join(t.path, skill))) {
        conflicts.push({ skill, agent: t.agent, path: path.join(t.path, skill) })
      }
    }
  }
  return conflicts
}

function copyDir(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true })
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else fs.copyFileSync(s, d)
  }
}

export function installSkills({ skills, targets, overwrite = false }) {
  const source = skillSourceDir()
  const written = []
  for (const t of targets) {
    for (const skill of skills) {
      const src = path.join(source, skill)
      if (!fs.existsSync(src)) continue
      const dest = path.join(t.path, skill)
      if (fs.existsSync(dest) && !overwrite) continue
      copyDir(src, dest)
      written.push({ skill, agent: t.agent, path: dest })
    }
  }
  return written
}

const POINTER_START = '<!-- antislop:start -->'
const POINTER_END = '<!-- antislop:end -->'

export function updatePointers({ targets }) {
  const projectRoot = process.cwd()
  const entry = path.join(projectRoot, 'AGENTS.md')

  const coreTarget = targets.find((t) => fs.existsSync(path.join(t.path, CORE)))
  if (!coreTarget) return

  const rel = path
    .relative(projectRoot, path.join(coreTarget.path, CORE, 'SKILL.md'))
    .split(path.sep)
    .join('/')

  const existing = fs.existsSync(entry) ? fs.readFileSync(entry, 'utf8') : ''
  const lines = existing.split(/\r?\n/)
  const startIdx = lines.findIndex((l) => l.trim() === POINTER_START)
  const endIdx = lines.findIndex((l) => l.trim() === POINTER_END)
  const head = startIdx !== -1 && endIdx !== -1 && startIdx < endIdx ? lines.slice(0, startIdx) : lines
  const tail = startIdx !== -1 && endIdx !== -1 && startIdx < endIdx ? lines.slice(endIdx + 1) : []

  const block = [POINTER_START, `@${rel}`, POINTER_END]
  const body = [...head, ...block, ...tail]
    .filter((l, i, arr) => {
      if (l.trim() !== '') return true
      const prev = arr[i - 1]
      return !(prev === undefined || prev.trim() === '')
    })
    .join('\n')
    .trimEnd()

  fs.writeFileSync(entry, body + '\n')
}
