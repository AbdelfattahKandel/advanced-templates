import { Injectable, OnDestroy, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap, finalize } from 'rxjs/operators';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private currentLanguage = signal<Language>('ar');
  public translationsLoaded = signal<boolean>(false);
  private isBrowser: boolean = typeof window !== 'undefined';

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.initializeLanguage();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  getDirection(): 'rtl' | 'ltr' {
    return this.currentLanguage() === 'ar' ? 'rtl' : 'ltr';
  }


  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }


  private initializeLanguage(): void {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('preferredLanguage') as Language;
      this.currentLanguage.set(savedLang || 'ar');

      this.translate.setDefaultLang(this.currentLanguage());
      this.translate.use(this.currentLanguage())
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => {
            this.translationsLoaded.set(true);
          })
        )
        .subscribe();

      document.documentElement.lang = this.currentLanguage();
      document.documentElement.dir = this.currentLanguage() === 'ar' ? 'rtl' : 'ltr';
    } else {
      this.translationsLoaded.set(true);
    }
  }


  public switchLanguage(): void {
    const newLang: Language = this.currentLanguage() === 'ar' ? 'en' : 'ar';
    this.currentLanguage.set(newLang);
    this.translate.use(newLang)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => {
          if (this.isBrowser) {
            document.documentElement.lang = newLang;
            document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
            localStorage.setItem('preferredLanguage', newLang);
          }
        })
      )
      .subscribe();
  }

  /**
   * Translate a key
   * @param key Translation key
   * @param params Optional parameters
   */
  translateKey(key: string, params?: any): string {
    return this.translate.instant(key, params);
  }

  isRTL(): boolean {
    return this.getDirection() === 'rtl';
  }
}
