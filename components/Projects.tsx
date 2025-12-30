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

export default function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: 'AppMed (Faculté de Médecine)',
      description:
        'Plateforme web pour la gestion et la diffusion de documents/ressources, avec interface moderne et modules internes.',
      technologies: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
      links: [
        { label: 'Démo', url: 'https://demo-epirc.gasycoder.com/', type: 'live' },
        { label: 'Code', url: 'https://github.com/GasyCoder/demo1-appmed', type: 'github' },
      ],
    },
    {
      title: 'RSS Blog (Backend + Frontend)',
      description:
        'Mini-blog alimenté par des flux RSS : backend Python pour l’agrégation/normalisation des articles, frontend Next.js pour l’affichage avec routes SEO-friendly.',
      technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'RSS'],
      links: [
        { label: 'Code (Frontend)', url: 'https://github.com/GasyCoder/rss-blog-frontend', type: 'github' },
        { label: 'Code (Backend)', url: 'https://github.com/GasyCoder/rss-blog-backend', type: 'github' },
        { label: 'Démo', url: '#', type: 'live' },
      ],
    },
    {
      title: 'CHU Mahavoky Sud',
      description: 'Application web pour la digitalisation de processus et contenus au sein du CHU.',
      technologies: ['Laravel', 'Blade', 'MySQL'],
      links: [
        { label: 'Démo', url: '#', type: 'live' },
        { label: 'Code', url: '#', type: 'github' },
      ],
    },
    {
      title: 'EDGVM',
      description: 'Site/plateforme institutionnelle : contenus dynamiques, événements, actualités, pages publiques.',
      technologies: ['Laravel', 'Vite', 'MySQL'],
      links: [
        { label: 'Démo', url: '#', type: 'live' },
        { label: 'Code', url: '#', type: 'github' },
      ],
    },
    {
      title: 'E-Pirata',
      description: 'Plateforme orientée produit, avec logique backend et APIs selon les besoins.',
      technologies: ['Laravel', 'API', 'MySQL'],
      links: [
        { label: 'Démo', url: '#', type: 'live' },
        { label: 'Code', url: '#', type: 'github' },
      ],
    },
    {
      title: 'Gestion Tina',
      description: 'Application de gestion interne (CRUD métier) avec une interface simple et efficace.',
      technologies: ['Laravel', 'Livewire', 'MySQL'],
      links: [
        { label: 'Démo', url: '#', type: 'live' },
        { label: 'Code', url: '#', type: 'github' },
      ],
    },
    {
      title: 'Labo CTB Nosy Be',
      description: 'Plateforme de gestion pour laboratoire : documents, suivi, organisation des workflows.',
      technologies: ['Laravel', 'Livewire', 'MySQL'],
      links: [
        { label: 'Démo', url: '#', type: 'live' },
        { label: 'Code', url: '#', type: 'github' },
      ],
    },
    {
      title: 'ProdCatTest',
      description: 'Environnement de test/démo pour valider modules, UI et fonctionnalités avant intégration.',
      technologies: ['Laravel', 'Vite', 'MySQL'],
      links: [
        { label: 'Démo', url: '#', type: 'live' },
        { label: 'Code', url: '#', type: 'github' },
      ],
    },
  ];

  const isRealLink = (url?: string) => !!url && url !== '#';

  const LinkButton = ({ link }: { link: ProjectLink }) => {
    const disabled = !isRealLink(link.url);

    const base =
      'inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition ' +
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
        title={link.type === 'live' ? 'Voir la démo' : 'Voir le code'}
      >
        <Icon size={16} />
        {link.label}
      </a>
    );
  };

  return (
    <section
      id="projects"
      className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-md shadow-slate-200/30 backdrop-blur-xl dark:border-white/5 dark:bg-white/5 md:p-10"
    >
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <ArrowUpRight size={14} />
        {t.projects.title}
      </div>

      <div className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
        Sélection de projets livrés, avec versions démo lorsque disponibles.
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const hasDemo = project.links?.some((l) => l.type === 'live' && isRealLink(l.url)) ?? false;

          return (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white/95 via-white/80 to-slate-50/80 p-5 shadow-lg shadow-slate-200/25 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/40 dark:border-white/5 dark:from-white/10 dark:via-white/5 dark:to-slate-950"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/15 dark:bg-indigo-500/10" />

              <div className="relative flex h-full flex-col gap-4">
                <header className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/60 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        Projets réels
                      </span>

                      {hasDemo && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-100">
                          <Sparkles size={12} />
                          Demo
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
                    <span className="ml-auto inline-flex items-center rounded-2xl border border-slate-200/70 bg-white/50 px-3 py-2 text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                      Liens privés / bientôt
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
