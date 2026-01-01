'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      <span>© {currentYear} Florent BEZARA</span>
      <span className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{t.footer.rights}</span>
    </footer>
  );
}
