'use client';

import { useLanguage } from '@/lib/LanguageContext';

interface TechBadge {
  name: string;
  icon: string;
  color: string;
}

export default function TechStackBadges() {
  const { t } = useLanguage();

  const techStack = {
    backend: [
      { name: 'PHP', icon: '🐘', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700' },
      { name: 'Laravel', icon: '🔶', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700' },
      { name: 'Python', icon: '🐍', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' },
      { name: 'Node.js', icon: '💚', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700' },
    ],
    frontend: [
      { name: 'Vue.js', icon: '💚', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700' },
      { name: 'Next.js', icon: '⚫', color: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700' },
      { name: 'Tailwind', icon: '🎨', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700' },
      { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700' },
    ],
    data: [
      { name: 'MySQL', icon: '🗄️', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700' },
      { name: 'Redis', icon: '⚡', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700' },
      { name: 'Linux', icon: '🐧', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700' },
    ],
    tools: [
      { name: 'Git', icon: '📦', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700' },
      { name: 'GitHub', icon: '🐙', color: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700' },
      { name: 'VSCode', icon: '💻', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' },
      { name: 'Bash', icon: '⌨️', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700' },
    ],
  };

  const Section = ({ title, badges }: { title: string; badges: TechBadge[] }) => (
    <div>
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${badge.color}`}
          >
            <span>{badge.icon}</span>
            <span>{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {t.techStack.title}
      </h2>

      <div className="rounded-xl border border-slate-200/70 bg-white/80 p-6 space-y-6 dark:border-white/10 dark:bg-white/5">
        <Section title={t.techStack.backend} badges={techStack.backend} />
        <Section title={t.techStack.frontend} badges={techStack.frontend} />
        <Section title={t.techStack.data} badges={techStack.data} />
        <Section title={t.techStack.tools} badges={techStack.tools} />
      </div>
    </div>
  );
}
