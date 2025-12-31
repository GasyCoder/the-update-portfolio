'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const applyTheme = (nextTheme: Theme) => {
    if (typeof window === 'undefined') {
      return;
    }
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const storedTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const nextTheme = storedTheme ?? (prefersDark ? 'dark' : 'light');
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values instead of throwing during SSR
    return { theme: 'dark' as Theme, toggleTheme: () => {} };
  }
  return context;
}
