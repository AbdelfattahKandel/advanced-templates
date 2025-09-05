import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'template',
    pathMatch: 'full'
  },
  {
    path: 'lang-theme',
    loadComponent: () =>
      import('./shared/components/lang-theme/lang-theme.component')
        .then(m => m.LangThemeComponent)
  },
  {
    path: 'template',
    loadComponent: () =>
      import('./templates/template.component')
        .then(m => m.TemplateComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./templates/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      // Forms
      { path: 'register', loadComponent: () => import('./templates/forms/register/register.component').then(m => m.RegisterComponent) },
      { path: 'login', loadComponent: () => import('./templates/forms/login/login.component').then(m => m.LoginComponent) },
      { path: 'stepper', loadComponent: () => import('./templates/forms/stepper/stepper.component').then(m => m.StepperComponent) },

      // Dashboard Templates
      { path: 'dashboard-main', loadComponent: () => import('./templates/dashboard-templates/main-dashborad/main-dashborad.component').then(m => m.MainDashboradComponent) },
      { path: 'dashboard-analytics', loadComponent: () => import('./templates/dashboard-templates/analytics/analytics.component').then(m => m.AnalyticsComponent) },

      // Tables
      { path: 'tables', loadComponent: () => import('./templates/tables/tables.component').then(m => m.TablesComponent) },
      { path: 'users-table', loadComponent: () => import('./templates/tables/users-table/users-table.component').then(m => m.UsersTableComponent) },
      { path: 'shipments-table', loadComponent: () => import('./templates/tables/shipments-table/shipments-table.component').then(m => m.ShipmentsTableComponent) },

      // Kanban
      { path: 'charts', loadComponent: () => import('./templates/kanban/charts/chart.component').then(m => m.ChartComponent) },

      // Media
      { path: 'media-images', loadComponent: () => import('./templates/media-gallery/images/images.component').then(m => m.ImagesComponent) },
      { path: 'media-videos', loadComponent: () => import('./templates/media-gallery/videos/videos.component').then(m => m.VideosComponent) },

      // Notifications
       { path: 'modals', loadComponent: () => import('./templates/modals/modals.component').then(m => m.ModalsComponent) },
    ]
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];
