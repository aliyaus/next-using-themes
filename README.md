# How to use next-themes with Tailwind v4

## Pre-requisites
1. Create nextjs app by running `npx create-next-app@latest myAppName` and answer the questions as follows: 
```
✔ Would you like to use TypeScript? … No 
✔ Would you like to use ESLint? … No 
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No 
```
2. `npm install next-themes`

## Tailwind v4 Theme Setup
1. in globals.css create your root colors
```
:root{
  --custom-background: rgb(114 35 204);
  --custom-border: rgb(114 35 204);
  --custom-text: rgb(114 35 204);
}
```
1. in globals.css, similar to the root colors, create your dark theme colors like so:
```
.dark{
  --custom-background: rgb(204, 131, 35);
  --custom-border: rgb(204, 131, 35);
  --custom-text: rgb(204, 131, 35);
}
```
1. create a @theme object in globals.css and refer to your configured colors in the root theme & dark theme by variables:
```
@theme{
  --color-background: var(--custom-background); 
  --color-border: var(--custom-border); 
  --color-text: var(--custom-text); 
}
```

## Implementing next-themes to set the dark mode theme class
1. Create `theme.js`
```
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
```
2. in `layout.js` wrap with the Theme: 
```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
```

# References
- https://www.youtube.com/watch?v=bupetqS1SMU
- https://www.youtube.com/watch?v=7sYe_90JII4