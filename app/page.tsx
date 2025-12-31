'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import GitHubSidebar from '@/components/GitHubSidebar';
import ProfileTabs from '@/components/ProfileTabs';
import OverviewSection from '@/components/OverviewSection';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sectionLoading, setSectionLoading] = useState(true);

  useEffect(() => {
    setSectionLoading(true);
    const timer = setTimeout(() => setSectionLoading(false), 700);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <main className="relative min-h-screen w-full bg-slate-50 dark:bg-gray-900 transition-colors">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/30 via-indigo-200/20 to-transparent blur-3xl dark:from-indigo-600/10 dark:via-sky-500/5" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-200/40 via-sky-200/20 to-transparent blur-3xl dark:from-purple-700/10 dark:via-blue-600/5" />
      </div>

      {/* Navigation - Fixed at top */}
      <Navigation />

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar - Left Column */}
          <GitHubSidebar isLoading={sectionLoading} />

          {/* Main Content - Right Column */}
          <div className="min-w-0 flex-1">
            {/* Profile Tabs */}
            <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab Content */}
            <div>
              {activeTab === 'overview' && <OverviewSection isLoading={sectionLoading} />}
              {activeTab === 'projects' && <Projects isLoading={sectionLoading} />}
              {activeTab === 'skills' && <Skills isLoading={sectionLoading} />}
              {activeTab === 'contact' && <Contact isLoading={sectionLoading} />}
            </div>

            {/* Footer */}
            <div className="mt-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
