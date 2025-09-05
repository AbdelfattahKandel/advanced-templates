import { Component, effect, inject, signal } from "@angular/core";
import { LanguageService } from "../core/services/language.service";
import { Router, RouterLink , RouterOutlet} from "@angular/router";
import { CommonModule } from "@angular/common";
import { LangThemeComponent } from "../shared/components/lang-theme/lang-theme.component";
import { MenuModule } from "primeng/menu";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ButtonModule } from "primeng/button";
import { ThemeService } from "../core/services/theme.service";


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  imports: [CommonModule, RouterLink, LangThemeComponent, MenuModule, OverlayPanelModule, ButtonModule, RouterOutlet],
  standalone: true
})
export class TemplateComponent {
  menuItems = signal<any[]>([]);
  openMenuId: string | null = null;
theme = inject(ThemeService).theme;

  constructor(public languageService: LanguageService, private router: Router) {
    effect(() => {
      this.updateMenuItems();
    });
  }

  toggleMenu(item: any) {
    this.openMenuId = this.openMenuId === item.id ? null : item.id;
  }

  navigate(subItem: any) {
    // Navigation نسبي للـ template route
    this.router.navigate([subItem.routerLink], { relativeTo: this.router.routerState.root.firstChild });
    this.openMenuId = null;
  }

  updateMenuItems() {
    this.menuItems.set([
      {
        id: 'dashboard',
        label: this.languageService.isAr() ? 'الرئيسية' : 'Dashboard',
        icon: 'pi pi-home',
        routerLink: 'dashboard'
      },
      { 
        id: 'forms',
        label: this.languageService.isAr() ? 'النماذج' : 'Forms',
        icon: 'pi pi-file',
        items: [
          { label: this.languageService.isAr() ? 'تسجيل الدخول' : 'Login', routerLink: 'login' },
          { label: this.languageService.isAr() ? 'التسجيل' : 'Register', routerLink: 'register' },
          { label: this.languageService.isAr() ? 'ستيبّر' : 'Stepper', routerLink: 'stepper' }
        ]
      },
      {
        id: 'dashboardTemplates',
        label: this.languageService.isAr() ? 'لوحة التحكم' : 'Dashboard Templates',
        icon: 'pi pi-chart-bar',
        items: [
          { label: this.languageService.isAr() ? 'الرئيسية' : 'Main Dashboard', routerLink: 'dashboard-main' },
          { label: this.languageService.isAr() ? 'الإحصائيات' : 'Analytics', routerLink: 'dashboard-analytics' },
        ]
      },
      {
        id: 'tables',routerLink: 'tables',
        label: this.languageService.isAr() ? 'الجداول' : 'Tables',
        icon: 'pi pi-table',
        items: [
          { label: this.languageService.isAr() ? 'قائمة المستخدمين' : 'Users Table', routerLink: 'users-table' },
          { label: this.languageService.isAr() ? 'الشحنات' : 'Shipments Table', routerLink: 'shipments-table' },
        ]
      },
      {
        id: 'charts',
        label: this.languageService.isAr() ? 'الرسوم البيانية' : 'Charts',
        icon: 'pi pi-chart-bar',
        routerLink: 'charts'
      },
      {
        id: 'media',
        label: this.languageService.isAr() ? 'معرض الوسائط' : 'Media Gallery',
        icon: 'pi pi-image',
        items: [
          { label: this.languageService.isAr() ? 'صور' : 'Images', routerLink: 'media-images' },
          { label: this.languageService.isAr() ? 'فيديوهات' : 'Videos', routerLink: 'media-videos' },
        ]
      },
      {
        id: 'modals',
        label: this.languageService.isAr() ? 'الإشعارات' : 'Modals',
        icon: 'pi pi-window-maximize',
        routerLink: 'modals'
      }
    ]);
  }
  
}
