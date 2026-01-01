'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';

type ProjectLink = {
  label: string;
  url: string; // use '#' to disable
  type: 'live' | 'github';
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links?: ProjectLink[];
}

interface ProjectsProps {
  isLoading?: boolean;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const normalizeString = (value: unknown, fallback = ''): string =>
  typeof value === 'string' ? value : fallback;

const normalizeStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];

const normalizeLinks = (value: unknown): ProjectLink[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry) => {
      if (!isRecord(entry)) {
        return null;
      }

      const type = entry.type === 'github' || entry.type === 'live' ? entry.type : 'live';

      return {
        label: normalizeString(entry.label),
        url: normalizeString(entry.url, '#'),
        type,
      };
    })
    .filter((entry): entry is ProjectLink => entry !== null);
};

const normalizeProjects = (value: unknown): Project[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry) => {
      if (!isRecord(entry)) {
        return null;
      }

      return {
        title: normalizeString(entry.title),
        description: normalizeString(entry.description),
        technologies: normalizeStringArray(entry.technologies),
        links: normalizeLinks(entry.links),
      };
    })
    .filter((entry): entry is Project => entry !== null);
};

export default function Projects({ isLoading }: ProjectsProps) {
  const { t } = useLanguage();

  const projects = normalizeProjects(t?.projects?.items);

  const isRealLink = (url?: string) => !!url && url !== '#';

  const LinkButton = ({ link }: { link: ProjectLink }) => {
    const disabled = !isRealLink(link.url);

    const base =
      'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ' +
      'border bg-white/70 hover:-translate-y-0.5 ' +
      'dark:border-white/10 dark:bg-white/5';

    const liveStyle =
      'border-slate-200/70 text-slate-700 hover:border-indigo-200 hover:text-indigo-700 ' +
      'dark:text-slate-200 dark:hover:border-indigo-500/40';

    const githubStyle =
      'border-slate-200/70 text-slate-700 hover:border-slate-300 hover:text-slate-900 ' +
      'dark:text-slate-200 dark:hover:border-white/20';

    const cls =
      base + (link.type === 'live' ? ` ${liveStyle}` : ` ${githubStyle}`) + (disabled ? ' pointer-events-none opacity-50' : '');

    const Icon = link.type === 'live' ? ExternalLink : Github;

    return (
      <a
        href={link.url}
        target={!disabled ? '_blank' : undefined}
        rel={!disabled ? 'noopener noreferrer' : undefined}
        className={cls}
        title={link.type === 'live' ? t.projects.linkTooltips.live : t.projects.linkTooltips.code}
      >
        <Icon size={16} />
        {link.label}
      </a>
    );
  };

  if (isLoading) {
    return (
      <section
        id="projects"
        className="rounded-xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
      >
        <div className="skeleton h-3 w-28 rounded-full" />
        <div className="mt-4 space-y-2">
          <div className="skeleton h-3 w-2/3 rounded-full" />
          <div className="skeleton h-3 w-1/2 rounded-full" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200/60 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="skeleton h-4 w-2/3 rounded-full" />
              <div className="mt-3 space-y-2">
                <div className="skeleton h-3 w-full rounded-full" />
                <div className="skeleton h-3 w-5/6 rounded-full" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...Array(4)].map((_, chipIndex) => (
                  <div key={chipIndex} className="skeleton h-7 w-16 rounded-full" />
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <div className="skeleton h-9 w-24 rounded-lg" />
                <div className="skeleton h-9 w-24 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="rounded-xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
    >
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <ArrowUpRight size={14} />
        {t.projects.title}
      </div>

      <div className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
        {t.projects.intro}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const hasDemo = project.links?.some((l) => l.type === 'live' && isRealLink(l.url)) ?? false;

          return (
            <article
              key={index}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50/60 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-slate-800/30" />

              <div className="relative flex h-full flex-col gap-4">
                <header className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/60 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        {t.projects.badgeReal}
                      </span>

                      {hasDemo && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-100">
                          <Sparkles size={12} />
                          {t.projects.badgeDemo}
                        </span>
                      )}
                    </div>
                  </div>
                </header>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <footer className="mt-auto flex flex-wrap gap-2 pt-1">
                  {project.links?.map((link, i) => (
                    <LinkButton key={`${link.type}-${i}`} link={link} />
                  ))}

                  {project.links?.some((l) => !isRealLink(l.url)) && (
                    <span className="ml-auto inline-flex items-center rounded-lg border border-slate-200/70 bg-white/50 px-3 py-2 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                      {t.projects.linksPrivate}
                    </span>
                  )}
                </footer>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
