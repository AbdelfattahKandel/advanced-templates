import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../core/services/service/layout.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, ChartModule, FluidModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  themeService = inject(ThemeService).theme;
  isDark = computed(() => this.themeService() === 'dark');

  lineData: any;
  barData: any;
  pieData: any;
  polarData: any;
  radarData: any;

  lineOptions: any;
  barOptions: any;
  pieOptions: any;
  polarOptions: any;
  radarOptions: any;

  subscription: Subscription;

  constructor(private layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe(() => this.initCharts());

    // rerun charts when theme changes
    effect(() => {
      this.initCharts();
    });
  }

  ngOnInit() {
    this.initCharts();
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    // dynamic colors
    const labelColor = this.isDark() ? '#fff' : '#000';
    const gridColor = this.isDark() ? '#444' : '#ccc';

    // Bar chart
    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
          borderColor: documentStyle.getPropertyValue('--p-primary-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
          borderColor: documentStyle.getPropertyValue('--p-primary-200'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.barOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: labelColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: labelColor,
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: labelColor
          },
          grid: {
            color: gridColor,
            drawBorder: false
          }
        }
      }
    };

    // Pie chart
    this.pieData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--p-indigo-500'),
            documentStyle.getPropertyValue('--p-purple-500'),
            documentStyle.getPropertyValue('--p-teal-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--p-indigo-400'),
            documentStyle.getPropertyValue('--p-purple-400'),
            documentStyle.getPropertyValue('--p-teal-400')
          ]
        }
      ]
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: labelColor
          }
        }
      }
    };

    // Line chart
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: '#fff',
          borderColor: '#42A5F5',
          tension: 0.4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: '#fff',
          borderColor: '#66BB6A',
          tension: 0.4
        }
      ]
    };

    this.lineOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: labelColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: labelColor
          },
          grid: {
            color: gridColor,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: labelColor
          },
          grid: {
            color: gridColor,
            drawBorder: false
          }
        }
      }
    };

    // Polar chart
    this.polarData = {
      datasets: [
        {
          data: [11, 16, 7, 3],
          backgroundColor: [
            documentStyle.getPropertyValue('--p-indigo-500'),
            documentStyle.getPropertyValue('--p-purple-500'),
            documentStyle.getPropertyValue('--p-teal-500'),
            documentStyle.getPropertyValue('--p-orange-500')
          ],
          label: 'My dataset'
        }
      ],
      labels: ['Indigo', 'Purple', 'Teal', 'Orange']
    };

    this.polarOptions = {
      plugins: {
        legend: {
          labels: {
            color: labelColor
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: gridColor
          },
          ticks: {
            display: false,
            color: labelColor
          }
        }
      }
    };

    // Radar chart
    this.radarData = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: documentStyle.getPropertyValue('--p-indigo-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--p-indigo-400'),
          pointBorderColor: documentStyle.getPropertyValue('--p-indigo-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--p-indigo-400'),
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          borderColor: documentStyle.getPropertyValue('--p-purple-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--p-purple-400'),
          pointBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    this.radarOptions = {
      plugins: {
        legend: {
          labels: {
            color: labelColor
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            color: labelColor
          },
          grid: {
            color: gridColor
          }
        }
      }
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
