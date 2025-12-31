'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.experience, value: '5+' },
    { label: t.about.projectsCompleted, value: '30+' },
    { label: t.about.technologies, value: '15+' },
  ];

  return (
    <header className="overflow-hidden rounded-xl border border-slate-200/70 bg-gradient-to-br from-white/80 via-white/70 to-sky-50/60 p-6 backdrop-blur-xl dark:border-white/5 dark:from-white/10 dark:via-white/5 dark:to-indigo-950/30 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
        <div className="relative flex-shrink-0">
          <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-200 via-sky-200 to-transparent blur-2xl dark:from-indigo-600/30 dark:via-sky-500/25" />
          <Image
            src="/profile.jpeg"
            alt="GasyCoder Profile"
            width={120}
            height={120}
            className="relative rounded-lg border border-white/60 bg-white/90 dark:border-white/10 dark:bg-white/5"
            priority
          />
          <div className="absolute -right-4 bottom-0 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-white/80 dark:bg-white/10 dark:text-white dark:ring-white/10">
            <Sparkles size={14} className="text-indigo-500" />
            {t.hero.role}
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100/70 bg-indigo-50/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-100">
            {t.hero.greeting} ✦
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
              Backend Developer | Fullstack TALL | Build AI Tools | NodeJs
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300 md:text-lg">
              {t.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-indigo-500/40"
            >
              {t.hero.downloadCV}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 md:max-w-xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 rounded-lg border border-slate-200/70 bg-white/60 px-3 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <span className="text-xl font-semibold text-slate-900 dark:text-white">{stat.value}</span>
                <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
