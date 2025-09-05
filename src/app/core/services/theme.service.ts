import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('light');

  constructor() {
    const saved = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.theme.set(saved ?? (systemPrefersDark ? 'dark' : 'light'));

    effect(() => {
      const t = this.theme();
      document.documentElement.classList.toggle('my-app-dark', t === 'dark');
      localStorage.setItem('theme', t);
    });
  }

  setTheme(t: Theme) { this.theme.set(t); }
  toggle() { this.theme.set(this.theme() === 'dark' ? 'light' : 'dark'); }
}
