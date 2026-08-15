#!/usr/bin/env node
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const worker = path.join(__dirname, 'smoke-worker.mjs')

function tree(dir, prefix = '') {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(prefix + entry.name + '/')
      out.push(...tree(p, prefix + '  '))
    } else {
      out.push(prefix + entry.name)
    }
  }
  return out
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'antislop-smoke-'))
const result = spawnSync(process.execPath, [worker], { cwd: tmp, encoding: 'utf8' })
console.log('--- worker output ---')
console.log(result.stdout.trim())
if (result.status !== 0) console.log('worker stderr:', result.stderr)

console.log('\n--- files written to temp project ---')
console.log(tree(tmp).join('\n'))

const agentsPath = path.join(tmp, 'AGENTS.md')
if (fs.existsSync(agentsPath)) {
  console.log('\n--- AGENTS.md ---')
  console.log(fs.readFileSync(agentsPath, 'utf8'))
} else {
  console.log('\nAGENTS.md was not created (pointer step skipped).')
}

const coreSkill = path.join(tmp, '.claude', 'skills', 'antislop', 'SKILL.md')
console.log('\ncore SKILL.md exists:', fs.existsSync(coreSkill))

fs.rmSync(tmp, { recursive: true, force: true })
console.log('\ncleaned up temp project.')
