'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubContributions, type GitHubContribution } from '@/lib/github';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContributionGraph() {
  const { t } = useLanguage();
  const [contributions, setContributions] = useState<GitHubContribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    async function loadContributions() {
      try {
        const data = await fetchGitHubContributions();
        setContributions(data);
        setTotalContributions(data.reduce((sum, day) => sum + day.count, 0));
      } catch (error) {
        console.error('Error loading contributions:', error);
      } finally {
        setLoading(false);
      }
    }

    loadContributions();
  }, []);

  const getContributionColor = (level: number) => {
    const colors = {
      0: 'bg-gray-100 dark:bg-gray-800',
      1: 'bg-green-200 dark:bg-green-900',
      2: 'bg-green-400 dark:bg-green-700',
      3: 'bg-green-600 dark:bg-green-500',
      4: 'bg-green-700 dark:bg-green-400',
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  // Group contributions by weeks
  const groupByWeeks = () => {
    const weeks: GitHubContribution[][] = [];
    let currentWeek: GitHubContribution[] = [];

    contributions.forEach((contribution, index) => {
      const date = new Date(contribution.date);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

      currentWeek.push(contribution);

      // If it's Saturday or the last contribution, push the week
      if (dayOfWeek === 6 || index === contributions.length - 1) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    return weeks;
  };

  const weeks = groupByWeeks();

  if (loading) {
    return (
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          {t.contributions.title}
        </h2>
        <div className="rounded-xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="skeleton h-32 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {t.contributions.title}
        </h2>
        {totalContributions > 0 && (
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {t.contributions.totalLabel.replace('{{count}}', totalContributions.toString())}
          </span>
        )}
      </div>

      <div className="rounded-xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
        {contributions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              {t.contributions.emptyTitle}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              {t.contributions.emptyDescription}{' '}
              <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                .env.local
              </code>
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
              {t.contributions.settingsPrefix}{' '}
              <a
                href="https://github.com/settings/tokens"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-slate-600 dark:hover:text-slate-300"
              >
                {t.contributions.settingsLink}
              </a>{' '}
              {t.contributions.settingsSuffix}
            </p>
          </div>
        ) : (
          <>
            {/* Contribution grid */}
            <div className="flex gap-1 overflow-x-auto pb-2">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      className={`h-3 w-3 rounded-sm ${getContributionColor(day.level)} transition-colors`}
                      title={t.contributions.tooltip
                        .replace('{{count}}', day.count.toString())
                        .replace('{{date}}', new Date(day.date).toLocaleDateString())}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <span>{t.contributions.less}</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`h-3 w-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
              <span>{t.contributions.more}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
