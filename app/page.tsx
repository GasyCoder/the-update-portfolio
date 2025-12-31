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
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-800/30" />
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-slate-200/30 blur-3xl dark:bg-slate-800/20" />
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
