'use client';

import Image from 'next/image';
import { MapPin, Mail, Linkedin, Twitter, Github } from 'lucide-react';

interface GitHubSidebarProps {
  isLoading?: boolean;
}

export default function GitHubSidebar({ isLoading }: GitHubSidebarProps) {
  if (isLoading) {
    return (
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="sticky top-20">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col items-center gap-4">
              <div className="skeleton h-32 w-32 rounded-full" />
              <div className="w-full space-y-2">
                <div className="skeleton h-4 w-2/3 rounded-full mx-auto" />
                <div className="skeleton h-3 w-5/6 rounded-full mx-auto" />
              </div>
              <div className="skeleton h-3 w-1/2 rounded-full" />
              <div className="skeleton h-7 w-3/4 rounded-full" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="skeleton h-3 w-24 rounded-full" />
              {[...Array(4)].map((_, index) => (
                <div key={index} className="skeleton h-8 w-full rounded-lg" />
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <div className="skeleton h-3 w-28 rounded-full" />
              <div className="grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="skeleton h-12 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-20 space-y-6 rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/profile.jpeg"
              alt="GasyCoder Profile"
              width={180}
              height={180}
              className="aspect-square rounded-full border border-slate-200 object-cover transition-all duration-200 dark:border-slate-700"
              priority
            />
            <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name and Username */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-200">
            BEZARA Florent
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors duration-200">
            Backend Developer | Fullstack TALL | Build AI Tools | NodeJs
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent dark:via-white/10 transition-colors duration-200" />

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
          <MapPin size={16} strokeWidth={1.5} className="text-slate-500 dark:text-slate-400" />
          <span>Mahajanga, Madagascar</span>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-all duration-200 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Open to opportunities</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent dark:via-white/10 transition-colors duration-200" />

        {/* Social Links */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 transition-colors duration-200">
            Connect
          </h3>
          <div className="space-y-2">
            <a
              href="mailto:contact@gasycoder.com"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
            >
              <Mail size={14} strokeWidth={1.5} className="flex-shrink-0 text-slate-500" />
              <span className="truncate">contact@gasycoder.com</span>
            </a>
            <a
              href="https://github.com/GasyCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
            >
              <Github size={14} strokeWidth={1.5} className="flex-shrink-0 text-slate-500" />
              <span className="truncate">github.com/GasyCoder</span>
            </a>
            <a
              href="https://linkedin.com/in/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
            >
              <Linkedin size={14} strokeWidth={1.5} className="flex-shrink-0 text-slate-500" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://twitter.com/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
            >
              <Twitter size={14} strokeWidth={1.5} className="flex-shrink-0 text-slate-500" />
              <span>Twitter / X</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent dark:via-white/10 transition-colors duration-200" />

        {/* Achievements */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3 transition-colors duration-200">
            Achievements
          </h3>
          <div className="flex gap-2 justify-center">
            <div className="group relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                🚀
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Early Adopter
              </div>
            </div>
            <div className="group relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                ⭐
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Star Creator
              </div>
            </div>
            <div className="group relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                🔥
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Hot Streak
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
