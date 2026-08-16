import fs from 'node:fs'
import path from 'node:path'
import { skillSourceDir, resolveTargets, detectConflicts, installSkills, updatePointers } from '../lib/install.mjs'

const skills = ['antislop', 'antislop-ui']

const targets = resolveTargets('project')
let conflicts = detectConflicts({ skills, targets })
let written = installSkills({ skills, targets, overwrite: false })
const pointers = updatePointers({ targets, skills })

console.log('cwd:', process.cwd())
console.log('A targets:', targets.map((t) => `${t.agent.id}@${t.path} exists=${t.exists}`).join(' | '))
console.log('A conflicts:', conflicts.length, '(fresh project, expect 0)')
console.log('A written:', written.map((w) => `${w.agent.id}:${w.skill}`).join(', '))
console.log('A pointers:', pointers.map((p) => path.basename(p)).join(', '), '(expect CLAUDE.md)')

conflicts = detectConflicts({ skills, targets })
written = installSkills({ skills, targets, overwrite: false })
console.log('B conflicts:', conflicts.length, '(expect 2)')
console.log('B written:', written.length, '(expect 0)')

written = installSkills({ skills, targets, overwrite: true })
console.log('C written:', written.length, '(expect 2)')

const globalTargets = resolveTargets('global')
console.log('D global targets:', globalTargets.map((t) => `${t.agent.id}@${t.path}`).join(' | '))

const src = fs.readFileSync(path.join(skillSourceDir(), 'antislop-ui', 'SKILL.md'), 'utf8')
const dst = fs.readFileSync(path.join(process.cwd(), '.claude', 'skills', 'antislop-ui', 'SKILL.md'), 'utf8')
console.log('E antislop-ui SKILL.md identical:', src === dst)

updatePointers({ targets, skills })
const entry = fs.readFileSync(path.join(process.cwd(), 'CLAUDE.md'), 'utf8')
console.log('F blocks after a second run:', (entry.match(/antislop:start/g) || []).length, '(expect 1)')
