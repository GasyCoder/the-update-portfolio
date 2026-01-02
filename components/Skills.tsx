'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Monitor, Server, Sparkles, Wrench } from 'lucide-react';

interface SkillCategory {
  key: 'frontend' | 'backend' | 'tools';
  title: string;
  description: string;
  skills: string[];
}

interface SkillsProps {
  isLoading?: boolean;
}

export default function Skills({ isLoading }: SkillsProps) {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = t.skills.categories;

  const otherTech = t.skills.otherTech;

  const categoryStyles = {
    frontend: {
      card: 'from-sky-500/10 via-white/90 to-white/60 dark:from-sky-500/15 dark:via-white/10 dark:to-slate-900/80',
      icon: 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200',
      chip: 'border-sky-200/70 text-sky-700 dark:border-sky-500/30 dark:text-sky-100',
      glow: 'shadow-[0_0_0_1px_rgba(56,189,248,0.2)]',
    },
    backend: {
      card: 'from-emerald-500/10 via-white/90 to-white/60 dark:from-emerald-500/15 dark:via-white/10 dark:to-slate-900/80',
      icon: 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200',
      chip: 'border-emerald-200/70 text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-100',
      glow: 'shadow-[0_0_0_1px_rgba(16,185,129,0.2)]',
    },
    tools: {
      card: 'from-indigo-500/10 via-white/90 to-white/60 dark:from-indigo-500/15 dark:via-white/10 dark:to-slate-900/80',
      icon: 'bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200',
      chip: 'border-indigo-200/70 text-indigo-700 dark:border-indigo-500/30 dark:text-indigo-100',
      glow: 'shadow-[0_0_0_1px_rgba(99,102,241,0.2)]',
    },
  } as const;

  const categoryIcons = {
    frontend: Monitor,
    backend: Server,
    tools: Wrench,
  } as const;

  if (isLoading) {
    return (
      <section
        id="skills"
        className="rounded-xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
      >
        <div className="skeleton h-3 w-24 rounded-full" />
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200/60 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
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
    <section id="skills" className="rounded-xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            <Sparkles size={14} />
            {t.skills.title}
          </div>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">{t.skills.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {skillCategories.length} {t.skills.categoryCountLabel}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => {
          const styles = categoryStyles[category.key] ?? categoryStyles.frontend;
          const Icon = categoryIcons[category.key] ?? Monitor;

          return (
            <div
              key={category.key}
              className={`group rounded-2xl border border-slate-200/70 bg-gradient-to-br p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 ${styles.card} ${styles.glow}`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2 ${styles.icon}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{category.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300">{category.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border bg-white/80 px-3 py-1.5 text-sm font-medium shadow-sm transition group-hover:-translate-y-0.5 dark:bg-white/5 ${styles.chip}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 dark:border-indigo-500/20 dark:bg-indigo-500/10">
          <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-100">{t.skills.otherTitle}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.skills.otherDescription}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {otherTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-100"
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
