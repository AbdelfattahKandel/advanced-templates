import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { CurrencyPipe } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ChartModule, TableModule, CardModule, TagModule, ProgressBarModule, CurrencyPipe],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  chartData: any;
  chartOptions: any;
  pieData: any;
  pieOptions: any;

  orders = [
    { id: '1001', customer: 'John Doe', status: 'Pending', total: 250 },
    { id: '1002', customer: 'Jane Smith', status: 'Completed', total: 450 },
    { id: '1003', customer: 'Michael Lee', status: 'Cancelled', total: 120 },
    { id: '1004', customer: 'Emily Clark', status: 'Completed', total: 680 }
  ];

  topProducts = [
    { name: 'Bamboo Watch', category: 'Accessories', sales: 230, image: 'https://unsplash.com/photos/bamboo-watch.jpg' },
    { name: 'Black Watch', category: 'Accessories', sales: 190, image: 'https://unsplash.com/photos/black-watch.jpg' },
    { name: 'Blue Band', category: 'Fitness', sales: 160, image: 'https://unsplash.com/photos/blue-band.jpg' },
    { name: 'Game Controller', category: 'Electronics', sales: 140, image: 'https://unsplash.com/photos/game-controller.jpg' }
  ];

  constructor(public languageService: LanguageService) {
    this.chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Revenue',
          data: [1200, 1900, 3000, 2500, 3200, 4100, 5000],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#6c757d' }
        },
        y: {
          ticks: { color: '#6c757d' }
        }
      }
    };

    this.pieData = {
      labels: ['Accessories', 'Electronics', 'Fitness', 'Fashion'],
      datasets: [
        {
          data: [540, 325, 702, 421],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8']
        }
      ]
    };

    this.pieOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#495057'
          }
        }
      }
    };
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Cancelled':
        return 'danger';
      default:
        return 'info';
    }
  }

  isAr() {
    return this.languageService.isAr();
  }
}
