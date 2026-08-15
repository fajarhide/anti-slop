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
  'allowed-tools: Read Write Edit Glob Grep',
  '---',
  '',
].join('\n')

const NO_DOWNLOAD_STEP = '4. **No download needed.** The skill folders are already installed next to this core: the picker (`npx antislop-ai`) and the skills directory (`npx skills add miqdadbadjuber/anti-slop`) copy them into place. To add or remove a skill later, run `npx antislop-ai` again.'

let coreBody = fs.readFileSync(path.join(repoRoot, 'antislop.md'), 'utf8')
  .replace(/\r\n/g, '\n')
  .trim()

if (coreBody.includes('4. **Download the chosen skill(s)**')) {
  coreBody = coreBody.replace(
    /4\. \*\*Download the chosen skill\(s\)\*\*[\s\S]*?\n   ```\n(?=5\. )/,
    NO_DOWNLOAD_STEP + '\n\n'
  )
  coreBody = coreBody.replace(
    /- The wizard needs download and file-write access for steps 4 and 5; the user approves once\./,
    '- The wizard needs file-write access for step 5 (the pointer block); the user approves once. Skills are already installed in this packaged form.'
  )
}

fs.writeFileSync(path.join(repoSkills, 'antislop', 'SKILL.md'), CORE_FRONTMATTER + coreBody + '\n')

fs.rmSync(cliSkills, { recursive: true, force: true })
fs.cpSync(repoSkills, cliSkills, { recursive: true })
console.log('Regenerated skills/antislop/SKILL.md from antislop.md and synced to cli/skills/')
