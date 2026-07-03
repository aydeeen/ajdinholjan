import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const outputDir = path.join(process.cwd(), 'public', 'blog')

const covers = [
  {
    file: 'react-19-forms.png',
    title: 'React 19 Forms',
    kicker: 'React',
    colors: ['#0f172a', '#0ea5e9', '#f97316'],
  },
  {
    file: 'css-anchor-positioning.png',
    title: 'CSS Anchor Positioning',
    kicker: 'CSS',
    colors: ['#111827', '#22c55e', '#38bdf8'],
  },
  {
    file: 'next-16-performance.png',
    title: 'Next.js 16 Performance',
    kicker: 'Next.js',
    colors: ['#18181b', '#eab308', '#14b8a6'],
  },
  {
    file: 'vite-7-quiet-tooling.png',
    title: 'Vite 7 and Quiet Tooling',
    kicker: 'Tooling',
    colors: ['#172554', '#f59e0b', '#67e8f9'],
  },
  {
    file: 'tailwind-41-after-hype.png',
    title: 'Tailwind 4.1 After the Hype',
    kicker: 'Tailwind CSS',
    colors: ['#082f49', '#06b6d4', '#a3e635'],
  },
  {
    file: 'typescript-clearer-code.png',
    title: 'TypeScript and Clearer Code',
    kicker: 'TypeScript',
    colors: ['#1e293b', '#3b82f6', '#facc15'],
  },
  {
    file: 'node-24-runtime-habits.png',
    title: 'Node 24 Runtime Habits',
    kicker: 'Node.js',
    colors: ['#14532d', '#84cc16', '#f8fafc'],
  },
  {
    file: 'view-transitions-polish.png',
    title: 'View Transitions and Polish',
    kicker: 'Web Platform',
    colors: ['#312e81', '#f43f5e', '#fef3c7'],
  },
  {
    file: 'ai-assisted-coding-ownership.png',
    title: 'AI-Assisted Coding Ownership',
    kicker: 'AI',
    colors: ['#111827', '#38bdf8', '#f472b6'],
  },
  {
    file: 'mid-2026-frontend-stack.png',
    title: 'Mid-2026 Front-End Stack',
    kicker: 'Front-End',
    colors: ['#0f172a', '#10b981', '#fb7185'],
  },
  {
    file: 'container-queries-components.png',
    title: 'Container Queries and Components',
    kicker: 'CSS',
    colors: ['#164e63', '#2dd4bf', '#fde68a'],
  },
  {
    file: 'container-queries-layout-habits.png',
    title: 'Container Queries and Layout Habits',
    kicker: 'CSS',
    colors: ['#164e63', '#a7f3d0', '#38bdf8'],
  },
  {
    file: 'passkeys-login.png',
    title: 'Passkeys and Login UX',
    kicker: 'Security',
    colors: ['#1f2937', '#60a5fa', '#fbbf24'],
  },
  {
    file: 'frontend-code-review.png',
    title: 'Code Review for Front-End Work',
    kicker: 'Review',
    colors: ['#1e293b', '#818cf8', '#f8fafc'],
  },
  {
    file: 'frontend-tools-now.png',
    title: 'What I Want From Front-End Tools Now',
    kicker: 'Tooling',
    colors: ['#172554', '#14b8a6', '#fde047'],
  },
  {
    file: 'maintaining-older-next-site.png',
    title: 'Maintaining an Older Next.js Site',
    kicker: 'Next.js',
    colors: ['#18181b', '#a3e635', '#38bdf8'],
  },
  {
    file: 'popover-api-less-javascript.png',
    title: 'Popover API and Less JavaScript',
    kicker: 'Web Platform',
    colors: ['#312e81', '#fb7185', '#bfdbfe'],
  },
  {
    file: 'design-systems-boring-names.png',
    title: 'Design Systems Need Boring Names',
    kicker: 'UX',
    colors: ['#27272a', '#fb923c', '#bef264'],
  },
  {
    file: 'design-systems-small-teams.png',
    title: 'Design Systems for Small Teams',
    kicker: 'Design Systems',
    colors: ['#27272a', '#c084fc', '#fde68a'],
  },
  {
    file: 'accessibility-plain-html.png',
    title: 'Accessibility Starts With HTML',
    kicker: 'Accessibility',
    colors: ['#134e4a', '#5eead4', '#fef08a'],
  },
  {
    file: 'keyboard-flow-quality.png',
    title: 'Keyboard Flow Is Front-End Quality',
    kicker: 'Accessibility',
    colors: ['#064e3b', '#34d399', '#e0f2fe'],
  },
  {
    file: 'performance-budgets.png',
    title: 'Performance Budgets',
    kicker: 'Performance',
    colors: ['#1e1b4b', '#f97316', '#93c5fd'],
  },
  {
    file: 'performance-budgets-creativity.png',
    title: 'Performance Budgets Without Killing Creativity',
    kicker: 'Performance',
    colors: ['#1e1b4b', '#f59e0b', '#f0abfc'],
  },
  {
    file: 'testing-users-can-break.png',
    title: 'Testing What Users Can Break',
    kicker: 'Testing',
    colors: ['#0f172a', '#22c55e', '#facc15'],
  },
  {
    file: 'wordpress-practical-choice.png',
    title: 'WordPress Is Still a Practical Choice',
    kicker: 'WordPress',
    colors: ['#0c4a6e', '#7dd3fc', '#fef08a'],
  },
  {
    file: 'wordpress-blocks-client-work.png',
    title: 'WordPress Blocks Are Client Work',
    kicker: 'WordPress',
    colors: ['#0c4a6e', '#38bdf8', '#f8fafc'],
  },
  {
    file: 'local-first-apps.png',
    title: 'Local-First Apps',
    kicker: 'JavaScript',
    colors: ['#422006', '#f59e0b', '#bbf7d0'],
  },
  {
    file: 'security-headers-front-end.png',
    title: 'Security Headers Are Front-End Work',
    kicker: 'Security',
    colors: ['#111827', '#ef4444', '#fde047'],
  },
  {
    file: 'dashboards-repeat-visits.png',
    title: 'Dashboards for Repeat Visits',
    kicker: 'UX',
    colors: ['#1f2937', '#22c55e', '#c4b5fd'],
  },
  {
    file: 'deleting-dependencies.png',
    title: 'Deleting Dependencies',
    kicker: 'Maintenance',
    colors: ['#0f172a', '#f97316', '#2dd4bf'],
  },
]

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const wrapText = (text, maxLineLength = 23) => {
  const words = text.split(' ')
  const lines = []
  let line = ''

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxLineLength && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  })

  if (line) lines.push(line)
  return lines
}

const createSvg = ({ title, kicker, colors }) => {
  const [bg, accent, highlight] = colors
  const titleLines = wrapText(title)
  const titleSvg = titleLines
    .map(
      (line, index) =>
        `<text x="150" y="${390 + index * 105}" class="title">${escapeHtml(line)}</text>`
    )
    .join('')

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1000" viewBox="0 0 2000 1000">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="58%" stop-color="#111827"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="20%" r="55%">
      <stop offset="0%" stop-color="${highlight}" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="${highlight}" stop-opacity="0"/>
    </radialGradient>
    <style>
      .kicker { fill: ${highlight}; font: 700 38px Arial, sans-serif; letter-spacing: 8px; text-transform: uppercase; }
      .title { fill: #fff; font: 800 88px Arial, sans-serif; letter-spacing: 0; }
      .line { stroke: ${highlight}; stroke-width: 8; stroke-linecap: round; opacity: .92; }
      .grid { stroke: rgba(255,255,255,.11); stroke-width: 2; }
    </style>
  </defs>
  <rect width="2000" height="1000" fill="url(#bg)"/>
  <rect width="2000" height="1000" fill="url(#glow)"/>
  <path d="M1240 140 C1520 120 1770 280 1830 520 C1885 744 1700 880 1450 840 C1230 804 1100 660 1136 458 C1160 324 1198 212 1240 140Z" fill="rgba(255,255,255,.08)"/>
  <g opacity=".7">
    <path d="M1220 220 H1780" class="grid"/>
    <path d="M1220 340 H1780" class="grid"/>
    <path d="M1220 460 H1780" class="grid"/>
    <path d="M1220 580 H1780" class="grid"/>
    <path d="M1220 700 H1780" class="grid"/>
    <path d="M1300 170 V760" class="grid"/>
    <path d="M1440 170 V760" class="grid"/>
    <path d="M1580 170 V760" class="grid"/>
    <path d="M1720 170 V760" class="grid"/>
  </g>
  <line x1="150" y1="235" x2="360" y2="235" class="line"/>
  <text x="150" y="190" class="kicker">${escapeHtml(kicker)}</text>
  ${titleSvg}
  <circle cx="1710" cy="785" r="84" fill="${highlight}" opacity=".88"/>
  <circle cx="1585" cy="785" r="48" fill="${accent}" opacity=".9"/>
</svg>`
}

await fs.mkdir(outputDir, { recursive: true })

for (const cover of covers) {
  const filePath = path.join(outputDir, cover.file)
  await sharp(Buffer.from(createSvg(cover)))
    .png()
    .toFile(filePath)
  console.log(`Created ${path.relative(process.cwd(), filePath)}`)
}
