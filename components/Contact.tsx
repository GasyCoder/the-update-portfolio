'use client';

import { useLanguage } from '@/lib/LanguageContext';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Phone,
} from 'lucide-react';

interface ContactProps {
  isLoading?: boolean;
}

export default function Contact({ isLoading }: ContactProps) {
  const { t } = useLanguage();

  // WhatsApp number (Madagascar) => wa.me requires digits only, no "+"
  const whatsappRaw = '+261349345251';
  const whatsappDigits = whatsappRaw.replace(/\D/g, ''); // 261349345251
  const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    t.contact.whatsappMessage
  )}`;

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/gasycoder' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/florentbezara/' },
    { name: 'X', icon: Twitter, url: 'https://x.com/Florent_bezara' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@gasycoder.com' },
    { name: 'WhatsApp', icon: MessageCircle, url: whatsappUrl },
  ];

  if (isLoading) {
    return (
      <section
        id="contact"
        className="rounded-xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
      >
        <div className="skeleton h-3 w-24 rounded-full" />

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="md:col-span-2 rounded-lg border border-slate-200/60 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="skeleton h-5 w-3/4 rounded-full" />
            <div className="mt-3 space-y-2">
              <div className="skeleton h-3 w-full rounded-full" />
              <div className="skeleton h-3 w-4/5 rounded-full" />
            </div>
            <div className="mt-4 flex gap-3">
              <div className="skeleton h-11 w-40 rounded-xl" />
              <div className="skeleton h-11 w-40 rounded-xl" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200/60 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="skeleton h-4 w-20 rounded-full" />
            <div className="mt-4 space-y-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="skeleton h-10 w-full rounded-xl" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 skeleton h-4 w-2/3 rounded-full" />
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="rounded-xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10"
    >
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <Sparkles size={14} />
        {t.contact.title}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Primary card */}
        <div className="md:col-span-2">
          <div className="rounded-lg border border-indigo-100 bg-indigo-50/40 p-5 shadow-sm shadow-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-500/10">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {t.contact.description}
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {t.contact.availability}
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Email CTA */}
              <a
                href="mailto:contact@gasycoder.dev"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
              >
                {t.contact.send}
                <Send size={16} />
              </a>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600"
                aria-label={t.contact.whatsappAria}
              >
                <MessageCircle size={16} />
                {t.contact.whatsappLabel}
                <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-slate-500" />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
                <Phone className="h-4 w-4" />
                {whatsappRaw}
              </span>
              <span className="text-slate-400 dark:text-slate-500">{t.contact.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Social card */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{t.contact.socialTitle}</h3>

          <div className="mt-3 flex flex-col gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                      <Icon size={16} />
                    </span>
                    {social.name}
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-6 text-[15px] text-slate-600 dark:text-slate-400">
        {t.contact.footerAvailability} •{' '}
        <a
          href="mailto:contact@gasycoder.com"
          className="text-slate-900 underline decoration-indigo-300 underline-offset-4 dark:text-white"
        >
          contact@gasycoder.com
        </a>{' '}
        •{' '}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-900 underline decoration-emerald-300 underline-offset-4 dark:text-white"
        >
          {t.contact.whatsappLabel}
        </a>
      </p>
    </section>
  );
}
