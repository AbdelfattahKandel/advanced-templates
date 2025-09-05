import { Injectable, signal, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'ar' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('ar');

  constructor(private translate: TranslateService) {
    // initialize from storage or current translate
    const saved = (localStorage.getItem('preferredLanguage') as Lang | null);
    const current = this.translate.getCurrentLang() as Lang | undefined;
    this.lang.set(saved ?? current ?? 'ar');

    // keep translate and storage in sync
    effect(() => {
      const lang = this.lang();
      this.translate.use(lang);
      localStorage.setItem('preferredLanguage', lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    });
  }

  setLanguage(lang: Lang) { this.lang.set(lang); }
  isAr() { return this.lang() === 'ar'; }
}
