'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Github, Linkedin, Twitter, Mail, Send, Sparkles, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  isLoading?: boolean;
}

export default function Contact({ isLoading }: ContactProps) {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/gasycoder' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gasycoder' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/gasycoder' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@gasycoder.dev' },
  ];

  if (isLoading) {
    return (
      <section
        id="contact"
        className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
      >
        <div className="skeleton h-3 w-24 rounded-full" />

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="skeleton h-5 w-3/4 rounded-full" />
            <div className="mt-3 space-y-2">
              <div className="skeleton h-3 w-full rounded-full" />
              <div className="skeleton h-3 w-4/5 rounded-full" />
            </div>
            <div className="mt-4 skeleton h-11 w-40 rounded-xl" />
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="skeleton h-4 w-20 rounded-full" />
            <div className="mt-4 space-y-3">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="skeleton h-10 w-full rounded-xl" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 skeleton h-4 w-2/3 rounded-full" />
      </section>
    );
  }

  return (
    <section id="contact" className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10">
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <Sparkles size={14} />
        {t.contact.title}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-5 shadow-sm dark:border-indigo-500/20 dark:from-indigo-500/10 dark:via-slate-900 dark:to-slate-950">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.contact.description}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Available for collaborations, freelance missions, or full-time roles.
            </p>
            <a
              href="mailto:contact@gasycoder.dev"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:-translate-y-0.5"
            >
              {t.contact.send}
              <Send size={16} />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white/90 to-slate-50/70 p-5 shadow-sm dark:border-white/5 dark:from-white/10 dark:to-slate-900">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Social</h3>
          <div className="mt-3 flex flex-col gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-slate-200/60 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/40"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-sky-100 text-slate-700 shadow-sm dark:from-indigo-500/20 dark:to-sky-500/10 dark:text-white">
                      <Icon size={16} />
                    </span>
                    {social.name}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-6 text-[15px] text-slate-600 dark:text-slate-400">
        Available for projects •{' '}
        <a href="mailto:contact@gasycoder.dev" className="text-slate-900 underline decoration-indigo-300 underline-offset-4 dark:text-white">
          contact@gasycoder.dev
        </a>
      </p>
    </section>
  );
}
