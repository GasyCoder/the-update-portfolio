'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center text-xl" aria-label={t.nav.developerLabel}>
            🧑‍💻
          </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Florent BEZARA</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.nav.founder}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-lg border border-slate-300/80 bg-white/80 p-2 text-slate-700 transition hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
              aria-label={t.nav.themeToggleLabel}
            >
              {theme === 'dark' ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
            </button>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={t.nav.languageToggleLabel}
            >
              <Languages size={16} strokeWidth={2} />
              <span className="hidden sm:inline">{language === 'fr' ? 'FR' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
