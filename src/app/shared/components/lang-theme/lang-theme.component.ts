import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


//================================================================================
//===========primeng
//================================================================================
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';


//================================================================================
//===========ngx-translate
//================================================================================
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslationService } from '../../../core/services/translation.service';
@Component({
  selector: 'app-lang-theme',
  imports: [TabsModule, CommonModule],
  templateUrl: './lang-theme.component.html',
  styleUrl: './lang-theme.component.css'
})
export class LangThemeComponent {
  private router = inject(Router);
  public translateService = inject(TranslateService);
  languageService = inject(LanguageService);
  themeService = inject(ThemeService);
  public translationService = inject(TranslationService);


  ngOnInit(): void {
    this.translateService.use(this.languageService.lang());
    this.router.events.subscribe(() => {
    });
  }

  switchLanguage(lang: 'ar' | 'en') { this.languageService.setLanguage(lang); }
  toggleLang() { this.languageService.setLanguage(this.languageService.isAr() ? 'en' : 'ar'); }
  toggleTheme() { this.themeService.toggle(); }

}
