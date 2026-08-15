import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.join(__dirname, '..', '..')
const repoSkills = path.join(repoRoot, 'skills')
const cliSkills = path.join(__dirname, '..', 'skills')

const CORE_FRONTMATTER = [
  '---',
  'name: antislop',
  'description: "Anti AI Slop: Design & Copy Rules. The core rules filter for AI coding agents. Load always to stop generic AI slop."',
  'allowed-tools: Bash(curl *) Bash(mkdir *) Read Write Edit Glob Grep',
  '---',
  '',
].join('\n')

const coreBody = fs.readFileSync(path.join(repoRoot, 'antislop.md'), 'utf8')
  .replace(/\r\n/g, '\n')
  .trim()
fs.writeFileSync(path.join(repoSkills, 'antislop', 'SKILL.md'), CORE_FRONTMATTER + coreBody + '\n')

fs.rmSync(cliSkills, { recursive: true, force: true })
fs.cpSync(repoSkills, cliSkills, { recursive: true })
console.log('Regenerated skills/antislop/SKILL.md from antislop.md and synced to cli/skills/')
