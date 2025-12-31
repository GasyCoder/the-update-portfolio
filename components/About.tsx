'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { MapPin, Briefcase, Target, Sparkle } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { icon: MapPin, label: 'Madagascar', tone: 'from-sky-500/15 to-indigo-500/10' },
    { icon: Briefcase, label: 'Full Stack Developer', tone: 'from-emerald-500/15 to-teal-500/10' },
    { icon: Target, label: 'Open to opportunities', tone: 'from-amber-500/15 to-orange-500/10' },
  ];

  return (
    <section id="about" className="rounded-xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-xl dark:border-white/5 dark:bg-white/5 md:p-10">
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <Sparkle size={14} />
        {t.about.title}
      </div>

      <div className="mt-4 space-y-6">
        <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          {t.about.description}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-slate-200/70 bg-gradient-to-br from-white/70 to-slate-50/70 px-3 py-3 dark:border-white/5 dark:from-white/10 dark:to-slate-900"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone} text-indigo-600 dark:text-white`}>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
