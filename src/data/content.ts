export interface Assistant {
  name: string
  img: string
  title: string
  desc: string
}

export const assistants: Assistant[] = [
  { name: 'Patrick', img: '/profiles/ppt-creator.jpg', title: 'Slide Creator', desc: 'Bullets in, polished deck out.' },
  { name: 'Marco', img: '/profiles/morph-ppt.jpg', title: 'Morph PPT', desc: 'Cinematic slides that actually move.' },
  { name: 'Maya', img: '/profiles/morph-ppt-3d.jpg', title: '3D Morph PPT', desc: 'Your slides, now in three dimensions.' },
  { name: 'David', img: '/profiles/pitch-deck-creator.jpg', title: 'Pitch Deck', desc: 'Investor-ready decks in minutes.' },
  { name: 'Emily', img: '/profiles/excel-creator.jpg', title: 'Excel Creator', desc: 'Finance, data, charts — I speak Excel.' },
  { name: 'Raj', img: '/profiles/dashboard-creator.jpg', title: 'Dashboard', desc: 'Point me at the data, I’ll build the charts.' },
  { name: 'Warren', img: '/profiles/financial-model-creator.jpg', title: 'Financial Model', desc: 'DCF, 3-statement models — just tell me the numbers.' },
  { name: 'William', img: '/profiles/word-creator.jpg', title: 'Word Creator', desc: 'Proposals, reports, letters — just say the format.' },
  { name: 'Albert', img: '/profiles/academic-paper.jpg', title: 'Academic Paper', desc: 'Outline or full draft — just give me the topic.' },
  { name: 'Ben', img: '/profiles/beautiful-mermaid.jpg', title: 'Diagram Expert', desc: 'Flowcharts, ER maps — I draw them.' },
  { name: 'Stella', img: '/profiles/ui-ux-pro-max.jpg', title: 'UI/UX Designer', desc: '57 styles, 95 palettes. Let’s build something beautiful.' },
  { name: 'Max', img: '/profiles/game-3d.jpg', title: '3D Game', desc: 'One prompt. One complete 3D game.' },
  { name: 'Oliver', img: '/profiles/story-roleplay.jpg', title: 'Story Writer', desc: 'Pick a world. I’ll write the story.' },
  { name: 'Henry', img: '/profiles/human-3-coach.jpg', title: 'Life Coach', desc: 'Mind, body, relationships — let’s talk.' },
  { name: 'Carlos', img: '/profiles/cowork.jpg', title: 'Cowork Agent', desc: 'Complex tasks, handled end-to-end.' },
  { name: 'Peter', img: '/profiles/planning-with-files.jpg', title: 'Planner', desc: 'Big tasks broken down, tracked, and done.' },
  { name: 'Sophie', img: '/profiles/social-job-publisher.jpg', title: 'Job Publisher', desc: 'Job post written, designed, published — done.' },
  { name: 'Gerald', img: '/profiles/star-office-helper.jpg', title: 'Office Helper', desc: 'Star Office connected and running.' },
  { name: 'Noah', img: '/profiles/openclaw-setup.jpg', title: 'OpenClaw Setup', desc: 'OpenClaw deployed, step by step.' },
  { name: 'Miles', img: '/profiles/moltbook.jpg', title: 'moltbook', desc: 'Post, comment, connect — the social layer.' },
]

export interface Channel { name: string; img: string }
export const channels: Channel[] = [
  { name: 'Telegram', img: '/channel-logos/telegram.svg' },
  { name: 'Slack', img: '/channel-logos/slack.svg' },
  { name: 'Discord', img: '/channel-logos/discord.svg' },
  { name: 'Lark', img: '/channel-logos/lark.svg' },
]

export const skills = [
  'PPT Creator', 'Excel Pro', 'Academic', 'Diagrams', 'UI Design',
  'Game Dev', 'Coach', 'Word', 'Roleplay', 'Planner',
]

export const faqs = [
  {
    q: 'What can AionUi actually do for me?',
    a: 'Think of it as a shared desktop where AI handles the busywork — slides, spreadsheets, reports, research, code, emails. One app instead of a dozen tools and tabs.',
  },
  {
    q: 'Can it keep working while I’m away from my computer?',
    a: 'Yes. Send it tasks from your phone via Telegram, WhatsApp, Slack, or Discord — it runs them on your computer back home. Or set it to generate your Monday sales report automatically every week and forget it.',
  },
  {
    q: 'Is it safe? Will my chats be uploaded somewhere?',
    a: 'No. AionUi runs on your own computer and never routes anything through our servers. You choose which AI to use (Claude, ChatGPT, Gemini, or whatever you prefer) and connect directly.',
  },
  {
    q: 'I’m not a developer. Can I still use it?',
    a: 'Absolutely. AionUi isn’t just a coding tool — it ships with 20+ built-in assistants for slides, spreadsheets, writing, design, and more. Just chat with them like you’d chat with a coworker.',
  },
  {
    q: 'How is this different from Cursor, Copilot, or Claude Desktop?',
    a: 'Cursor and Copilot mostly help developers write code; Claude Desktop only works with one model. AionUi is broader and more flexible — AI teammates that handle everyday work across your whole desktop, not just inside an editor, and you can run Claude, ChatGPT, and Gemini side by side and have them collaborate.',
  },
  {
    q: 'I already have Claude Code or Codex installed. Will they conflict?',
    a: 'No. AionUi auto-detects tools you already have and reuses them — no reinstalling, no duplication, no overwriting your setup.',
  },
  {
    q: 'Is it free? How much does it cost?',
    a: 'Free and open-source (Apache-2.0). Works on macOS, Windows, and Linux.',
  },
  {
    q: 'How do I report a bug or share feedback?',
    a: 'The fastest way is the "Got feedback?" button at the bottom of the app — we see it immediately. You can also open a GitHub issue, or find other community channels in the repo README.',
  },
]

export const cliAgents = [
  'Aion CLI', 'Claude Code', 'Codex', 'Gemini CLI',
  'OpenCode', 'OpenClaw', 'Goose', 'Copilot', 'Kimi CLI',
]

export const coTasks = [
  'Market research report',
  'Competitor analysis spreadsheet',
  'Write launch blog post',
  'Build investor pitch deck',
  'Social media campaign plan',
]

export interface ScheduledTask { name: string; schedule: string; status: string; agent: string; active: boolean }
export const scheduledTasks: ScheduledTask[] = [
  { name: 'Weekly sales report', schedule: 'Every Mon · 8:00 AM', status: 'Active', agent: 'Gemini CLI', active: true },
  { name: 'Daily code review', schedule: 'Every day · 9:00 AM', status: 'Running', agent: 'Claude Code', active: true },
  { name: 'Summarize emails', schedule: 'Every day · 8:30 AM', status: 'Active', agent: 'Aion CLI', active: true },
  { name: 'Backup project files', schedule: 'Every day · 11:00 PM', status: 'Paused', agent: 'Aion CLI', active: false },
  { name: 'Generate standup notes', schedule: 'Every Mon · 9:00 AM', status: 'Active', agent: 'Codex', active: true },
]
