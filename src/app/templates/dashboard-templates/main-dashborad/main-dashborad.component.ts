import { Component, inject, computed, OnInit, OnDestroy } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { CommonModule, NgClass } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { LayoutService } from '../../../core/services/service/layout.service';
import { ProductService, Product } from '../../../core/services/service/product.service';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-main-dashborad',
  standalone: true,
  imports: [CommonModule, NgClass, CardModule, ButtonModule, ChartModule, RippleModule, TableModule],
  templateUrl: './main-dashborad.component.html',
  styleUrls: ['./main-dashborad.component.css'], 
  providers: [ProductService]
})
export class MainDashboradComponent implements OnInit, OnDestroy {
  products!: Product[];

  layoutService = inject(LayoutService);
  theme = inject(ThemeService).theme;
  language = inject(LanguageService);

  isAr = computed(() => this.language.isAr());
  isDark = computed(() => this.theme() === 'dark');

  revenueChartData: any;
  revenueChartOptions: any;

  private subscription = new Subscription(); 

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.subscription.add(
      this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
        this.initRevenueChart();
      })
    );

    this.subscription.add(
      this.productService.getProductsSmall().subscribe((data) => (this.products = data))
    );

    this.initRevenueChart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  getBarColor(index: number): string {
    const isDark = this.isDark();
    const colors = isDark
      ? ['#60a5fa', '#3b82f6', '#2563eb']
      : ['#3b82f6', '#2563eb', '#1d4ed8'];
    return colors[index % colors.length];
  }

  getTotal(data: number[]): number {
    return data.reduce((sum, value) => sum + value, 0);
  }
  getDatasetOptions(index: number): any {
    const isDark = this.isDark();
    const borderColor = isDark ? '#4b5563' : '#d1d5db';

    return {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: { display: false, grid: { display: false } },
        y: { display: false, beginAtZero: true, grid: { display: false } }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark ? '#2d3748' : '#ffffff',
          titleColor: isDark ? '#ffffff' : '#1f2937',
          bodyColor: isDark ? '#e2e8f0' : '#1f2937',
          borderColor,
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            label: (context: any) => `${context.parsed.y.toLocaleString()}`
          }
        }
      },
      barPercentage: 0.8,
      categoryPercentage: 0.8
    };
  }

  getChartData() {
    return {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          type: 'bar',
          label: this.isAr() ? 'الاشتراكات' : 'Subscriptions',
          backgroundColor: this.getBarColor(0),
          data: [4000, 10000, 15000, 4000],
          barThickness: 32,
          stack: 'Stack 0'
        },
        {
          type: 'bar',
          label: this.isAr() ? 'إعلانات' : 'Ads',
          backgroundColor: this.getBarColor(1),
          data: [2100, 8400, 2400, 7500],
          barThickness: 32,
          stack: 'Stack 1'
        },
        {
          type: 'bar',
          label: this.isAr() ? 'شركاء' : 'Partners',
          backgroundColor: this.getBarColor(2),
          data: [4100, 5200, 3400, 7400],
          barThickness: 32,
          stack: 'Stack 2',
          borderRadius: { topLeft: 8, topRight: 8 },
          borderSkipped: false
        }
      ]
    };
  }

  private initRevenueChart() {
    const isDark = this.isDark();
    const borderColor = isDark ? '#4b5563' : '#d1d5db';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const axisTextColor = isDark ? '#e5e7eb' : '#1f2937';
    const legendTextColor = isDark ? '#e5e7eb' : '#1f2937';
    const barColors = isDark
      ? ['#60a5fa', '#3b82f6', '#2563eb']
      : ['#3b82f6', '#2563eb', '#1d4ed8'];

    this.revenueChartData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          type: 'bar',
          label: this.isAr() ? 'الاشتراكات' : 'Subscriptions',
          backgroundColor: barColors[0],
          data: [4000, 10000, 15000, 4000],
          barThickness: 32
        },
        {
          type: 'bar',
          label: this.isAr() ? 'إعلانات' : 'Ads',
          backgroundColor: barColors[1],
          data: [2100, 8400, 2400, 7500],
          barThickness: 32
        },
        {
          type: 'bar',
          label: this.isAr() ? 'شركاء' : 'Partners',
          backgroundColor: barColors[2],
          data: [4100, 5200, 3400, 7400],
          borderRadius: { topLeft: 8, topRight: 8 },
          borderSkipped: false,
          barThickness: 32
        }
      ]
    };

    this.revenueChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          position: 'top',
          align: 'center',
          labels: {
            color: legendTextColor,
            font: {
              family: this.isAr() ? 'Tajawal, sans-serif' : 'Inter, sans-serif',
              size: 13,
              weight: '500'
            },
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8
          }
        },
        tooltip: {
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
          titleColor: isDark ? '#ffffff' : '#111827',
          bodyColor: isDark ? '#e5e7eb' : '#1f2937',
          borderColor: isDark ? '#374151' : '#d1d5db',
          borderWidth: 1,
          padding: 12,
          displayColors: true,
          boxPadding: 6,
          cornerRadius: 6,
          usePointStyle: true
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: axisTextColor,
            font: {
              family: this.isAr() ? 'Tajawal, sans-serif' : 'Inter, sans-serif',
              size: 13,
              weight: '600'
            }
          },
          grid: { color: gridColor, drawOnChartArea: false },
          border: { color: borderColor }
        },
        y: {
          stacked: true,
          ticks: {
            color: axisTextColor,
            font: {
              family: this.isAr() ? 'Tajawal, sans-serif' : 'Inter, sans-serif',
              size: 13,
              weight: '600'
            },
            callback: (value: number) => value.toLocaleString()
          },
          grid: { color: gridColor, drawTicks: false },
          border: { color: borderColor }
        }
      }
    };
  }
}
