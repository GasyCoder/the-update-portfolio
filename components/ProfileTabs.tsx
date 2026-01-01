'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Code, Layers, Mail } from 'lucide-react';

interface ProfileTabsProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export default function ProfileTabs({ onTabChange, activeTab }: ProfileTabsProps) {
  const { t } = useLanguage();

  const tabs = [
    { id: 'overview', label: t.tabs.overview, icon: BookOpen },
    { id: 'projects', label: t.tabs.projects, icon: Code },
    { id: 'skills', label: t.tabs.skills, icon: Layers },
    { id: 'contact', label: t.tabs.contact, icon: Mail },
  ];

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-2 rounded-lg border border-slate-200/70 bg-white/70 p-2 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white hover:brightness-105'
                  : 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10'
              }`}
            >
              <Icon size={16} strokeWidth={1.5} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
