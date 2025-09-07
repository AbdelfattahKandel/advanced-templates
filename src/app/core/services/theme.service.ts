import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
   theme = signal<Theme>('light');

  constructor() {
    const saved = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.theme.set(saved ?? (systemPrefersDark ? 'dark' : 'light'));

    effect(() => {
      const toggle = this.theme();
      document.documentElement.classList.toggle('my-app-dark', toggle === 'dark');
      localStorage.setItem('theme', toggle);
    });
  }

  setTheme(toggle: Theme) { this.theme.set(toggle); }
  toggle() { this.theme.set(this.theme() === 'dark' ? 'light' : 'dark'); }
}
