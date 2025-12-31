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
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'projects', label: t.projects.title, icon: Code },
    { id: 'skills', label: t.skills.title, icon: Layers },
    { id: 'contact', label: t.contact.title, icon: Mail },
  ];

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200/70 bg-white/70 p-2 shadow-sm shadow-slate-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md shadow-indigo-500/30'
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
