'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles } from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillsProps {
  isLoading?: boolean;
}

export default function Skills({ isLoading }: SkillsProps) {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Vue.js' },
      ],
    },
    {
      title: t.skills.backend,
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'GraphQL' },
      ],
    },
    {
      title: t.skills.tools,
      skills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'VS Code' },
        { name: 'Figma' },
        { name: 'Postman' },
      ],
    },
    {
      title: t.skills.other,
      skills: [
        { name: 'REST API' },
        { name: 'Responsive Design' },
        { name: 'UI/UX' },
        { name: 'Agile/Scrum' },
        { name: 'Testing' },
      ],
    },
  ];

  const otherTech = ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Redux', 'Next Auth', 'Prisma', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn'];

  if (isLoading) {
    return (
      <section
        id="skills"
        className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
      >
        <div className="skeleton h-3 w-24 rounded-full" />
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="skeleton h-4 w-28 rounded-full" />
              <div className="mt-3 flex flex-wrap gap-2">
                {[...Array(6)].map((_, chipIndex) => (
                  <div key={chipIndex} className="skeleton h-7 w-20 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10">
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <Sparkles size={14} />
        {t.skills.title}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white/90 to-slate-50/70 p-5 shadow-sm dark:border-white/10 dark:from-white/10 dark:to-slate-900"
          >
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{category.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-indigo-100 bg-indigo-50/40 p-5 dark:border-indigo-500/20 dark:bg-indigo-500/10">
          <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-100">Other Technologies</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Curated tools and platforms I enjoy using on projects.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {otherTech.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-sm font-medium text-indigo-700 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
