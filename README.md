# How to use next-themes with Tailwind v4

1. in globals.css create your root colors
```
:root{
  --custom-background: rgb(114 35 204);
  --custom-border: rgb(114 35 204);
  --custom-text: rgb(114 35 204);
}
```
2. in globals.css, similar to the root colors, create your dark theme colors like so:
```
.dark{
  --custom-background: rgb(204, 131, 35);
  --custom-border: rgb(204, 131, 35);
  --custom-text: rgb(204, 131, 35);
}
```
3. create a @theme object in globals.css and refer to your configured colors in the root theme & dark theme by variables:
```
@theme{
  --color-background: var(--custom-background); 
  --color-border: var(--custom-border); 
  --color-text: var(--custom-text); 
}
```

# To use next-themes
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
    <ThemeProvider attribute="data-theme">
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