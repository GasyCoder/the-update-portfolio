'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsProps {
  isLoading?: boolean;
}

export default function Skills({ isLoading }: SkillsProps) {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = t.skills.categories;

  const otherTech = t.skills.otherTech;

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
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <Sparkles size={14} />
        {t.skills.title}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="rounded-lg border border-slate-200/70 bg-gradient-to-br from-white/90 to-slate-50/70 p-5 dark:border-white/10 dark:from-white/10 dark:to-slate-900"
          >
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{category.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-indigo-100 bg-indigo-50/40 p-5 dark:border-indigo-500/20 dark:bg-indigo-500/10">
          <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-100">{t.skills.otherTitle}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.skills.otherDescription}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {otherTech.map((tech, index) => (
              <span
                key={index}
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
