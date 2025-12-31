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
    <nav className="mb-8 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 border-b-2 px-1 pb-3 text-sm font-semibold transition ${
                isActive
                  ? 'border-slate-900 text-slate-900 dark:border-white dark:text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
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
