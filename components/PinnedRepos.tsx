'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { fetchPinnedRepositories, getLanguageColor, type GitHubRepo } from '@/lib/github';

interface TechBadge {
  name: string;
  icon: string;
  color: string;
}

// Map technologies to badges with icons and colors
const getTechBadges = (repo: GitHubRepo): TechBadge[] => {
  const badges: TechBadge[] = [];
  const language = repo.language?.toLowerCase() || '';
  const topics = repo.topics.map(t => t.toLowerCase());

  // Check for specific technologies based on language and topics
  if (language === 'php' || topics.includes('php')) {
    badges.push({ name: 'PHP', icon: '🐘', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700' });
  }

  if (topics.includes('laravel') || topics.includes('lumen')) {
    badges.push({ name: 'Laravel', icon: '🔶', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700' });
  }

  if (language === 'python' || topics.includes('python')) {
    badges.push({ name: 'Python', icon: '🐍', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' });
  }

  if (language === 'javascript' || topics.includes('javascript')) {
    badges.push({ name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700' });
  }

  if (language === 'typescript' || topics.includes('typescript')) {
    badges.push({ name: 'TypeScript', icon: '📘', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' });
  }

  if (topics.includes('vue') || topics.includes('vuejs') || topics.includes('vue-js')) {
    badges.push({ name: 'Vue.js', icon: '💚', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700' });
  }

  if (topics.includes('react') || topics.includes('reactjs') || topics.includes('react-native')) {
    badges.push({ name: 'React', icon: '⚛️', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700' });
  }

  if (topics.includes('nextjs') || topics.includes('next') || topics.includes('next-js')) {
    badges.push({ name: 'Next.js', icon: '▲', color: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700' });
  }

  if (topics.includes('tailwind') || topics.includes('tailwindcss')) {
    badges.push({ name: 'Tailwind', icon: '🎨', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700' });
  }

  if (topics.includes('nodejs') || topics.includes('node')) {
    badges.push({ name: 'Node.js', icon: '💚', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700' });
  }

  if (topics.includes('django') || topics.includes('flask')) {
    badges.push({ name: topics.includes('django') ? 'Django' : 'Flask', icon: '🐍', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700' });
  }

  if (topics.includes('mysql') || topics.includes('mariadb')) {
    badges.push({ name: 'MySQL', icon: '🗄️', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' });
  }

  if (topics.includes('postgresql') || topics.includes('postgres')) {
    badges.push({ name: 'PostgreSQL', icon: '🐘', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700' });
  }

  if (topics.includes('mongodb') || topics.includes('mongo')) {
    badges.push({ name: 'MongoDB', icon: '🍃', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700' });
  }

  if (topics.includes('docker') || topics.includes('dockerfile')) {
    badges.push({ name: 'Docker', icon: '🐳', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700' });
  }

  if (language === 'go' || topics.includes('golang')) {
    badges.push({ name: 'Go', icon: '🔵', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700' });
  }

  if (language === 'rust' || topics.includes('rust')) {
    badges.push({ name: 'Rust', icon: '🦀', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700' });
  }

  if (language === 'java' || topics.includes('java')) {
    badges.push({ name: 'Java', icon: '☕', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700' });
  }

  // Limit to 4 badges to avoid clutter
  return badges.slice(0, 4);
};

export default function PinnedRepos() {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const repos = await fetchPinnedRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error('Error loading pinned repositories:', error);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Github size={20} strokeWidth={1.5} />
          Pinned Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="skeleton mb-3 h-4 w-3/4 rounded-full" />
              <div className="skeleton mb-2 h-3 w-full rounded-full" />
              <div className="skeleton h-3 w-2/3 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <Github size={20} strokeWidth={1.5} />
        Pinned Repositories ({repositories.length})
      </h2>

      {repositories.length === 0 ? (
        <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-slate-600 dark:text-slate-400">No pinned repositories found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/30"
            >
              <div className="flex items-start justify-between mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 hover:underline font-semibold text-sm"
                >
                  <Github size={16} strokeWidth={1.5} />
                  <span className="truncate">{repo.name}</span>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex-shrink-0"
                    title="Visit live site"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                {repo.description || 'No description provided'}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star size={14} strokeWidth={1.5} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={14} strokeWidth={1.5} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              {getTechBadges(repo).length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {getTechBadges(repo).map((badge, index) => (
                    <div
                      key={index}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-medium ${badge.color}`}
                    >
                      <span>{badge.icon}</span>
                      <span>{badge.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Topics/Tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
