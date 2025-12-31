'use client';

import { useLanguage } from '@/lib/LanguageContext';
import ContributionGraph from './ContributionGraph';
import PinnedRepos from './PinnedRepos';
import TechStackBadges from './TechStackBadges';

interface OverviewSectionProps {
  isLoading?: boolean;
}

export default function OverviewSection({ isLoading }: OverviewSectionProps) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="skeleton h-5 w-32 rounded-full" />
          <div className="mt-4 space-y-2">
            <div className="skeleton h-3 w-full rounded-full" />
            <div className="skeleton h-3 w-11/12 rounded-full" />
            <div className="skeleton h-3 w-9/12 rounded-full" />
          </div>
          <div className="mt-5 border-t border-slate-200/70 pt-4 dark:border-white/10">
            <div className="skeleton h-4 w-28 rounded-full" />
            <div className="mt-3 space-y-2">
              <div className="skeleton h-3 w-full rounded-full" />
              <div className="skeleton h-3 w-10/12 rounded-full" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="skeleton h-5 w-32 rounded-full" />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="skeleton h-4 w-24 rounded-full" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, badgeIndex) => (
                    <div key={badgeIndex} className="skeleton h-7 w-20 rounded-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="skeleton h-5 w-40 rounded-full" />
          <div className="mt-4 grid grid-cols-12 gap-2">
            {[...Array(72)].map((_, index) => (
              <div key={index} className="skeleton h-3 w-3 rounded-sm" />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="skeleton h-5 w-44 rounded-full" />
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="skeleton h-4 w-3/4 rounded-full" />
                <div className="mt-3 space-y-2">
                  <div className="skeleton h-3 w-full rounded-full" />
                  <div className="skeleton h-3 w-2/3 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* About Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          About
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.about.description}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-200/70 dark:border-white/10">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
            Automation & AI
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Building n8n workflows, CLI utilities, and LLM integration patterns. Focused on creating tools that enhance developer productivity and automate repetitive tasks.
          </p>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <TechStackBadges />

      {/* Contribution Graph */}
      <ContributionGraph />

      {/* Pinned Repositories */}
      <PinnedRepos />
    </div>
  );
}
