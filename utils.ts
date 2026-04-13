@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Lexend", "Inter", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-50: #f0fdf4;
  --color-brand-100: #dcfce7;
  --color-brand-200: #bbf7d0;
  --color-brand-500: #22c55e;
  --color-brand-600: #16a34a;
  --color-brand-700: #15803d;
}

@layer base {
  body {
    @apply bg-brand-50 text-slate-900 font-sans antialiased;
  }
}

.markdown-body {
  @apply text-sm leading-relaxed;
}

.markdown-body p {
  @apply mb-3;
}

.markdown-body ul, .markdown-body ol {
  @apply mb-3 pl-5 list-disc;
}

.markdown-body strong {
  @apply font-semibold text-brand-700;
}

