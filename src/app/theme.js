'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Theme({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // or a loading skeleton/spinner

  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}