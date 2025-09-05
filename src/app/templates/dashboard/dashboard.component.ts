import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators ,FormsModule} from '@angular/forms';

// PrimeNG modules
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  image?: string;
}

interface Order {
  id: string;
  date: string;
  customer: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  total: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ChartModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    TagModule,
    ProgressBarModule,
    BadgeModule,
    AvatarModule,
    FileUploadModule,
    TooltipModule,
    PanelModule,
    CheckboxModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CurrencyPipe, DatePipe]
})
export class DashboardComponent implements OnInit {
  // KPI values
  kpis = {
    revenue: 12430,
    orders: 742,
    customers: 1209,
    conversion: 3.8 // %
  };

  // Charts
  lineData: any;
  barData: any;
  pieData: any;
  chartOptions: any;

  // Tables / data
  products: Product[] = [];
  orders: Order[] = [];

  // Quick form
  quickForm: FormGroup;

  // Dialogs
  displayProductDialog = false;
  editingProduct: Product | null = null;

  // Filters
  selectedCategory: string | null = null;
  categories = ['Accessories', 'Electronics', 'Fitness', 'Clothing'];

  // Activity feed
  activities: { time: string; text: string; user?: string }[] = [];

  // File upload placeholder
  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder) {
    this.quickForm = this.fb.group({
      name: ['', Validators.required],
      category: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      available: [true]
    });
  }

  ngOnInit(): void {
    this.initMockData();
    this.prepareCharts();
    this.prepareActivities();
  }

  initMockData() {
    // products (images are online placeholders)
    this.products = [
      { id: 'P-1000', name: 'Bamboo Watch', category: 'Accessories', price: 65, stock: 24, status: 'INSTOCK', image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg' },
      { id: 'P-1001', name: 'Black Watch', category: 'Accessories', price: 72, stock: 61, status: 'INSTOCK', image: 'https://primefaces.org/cdn/primeng/images/demo/product/black-watch.jpg' },
      { id: 'P-1002', name: 'Blue Band', category: 'Fitness', price: 79, stock: 2, status: 'LOWSTOCK', image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-band.jpg' },
      { id: 'P-1003', name: 'Game Controller', category: 'Electronics', price: 99, stock: 2, status: 'LOWSTOCK', image: 'https://primefaces.org/cdn/primeng/images/demo/product/game-controller.jpg' },
      { id: 'P-1004', name: 'Sneakers', category: 'Clothing', price: 78, stock: 52, status: 'INSTOCK', image: 'https://primefaces.org/cdn/primeng/images/demo/product/sneakers.jpg' },
      // ...add more if needed
    ];

    // orders
    this.orders = [
      { id: 'O-9001', date: '2025-08-25', customer: 'John Doe', status: 'Pending', total: 250 },
      { id: 'O-9002', date: '2025-08-24', customer: 'Jane Smith', status: 'Completed', total: 450 },
      { id: 'O-9003', date: '2025-08-23', customer: 'Michael Lee', status: 'Cancelled', total: 120 },
      { id: 'O-9004', date: '2025-08-22', customer: 'Emily Clark', status: 'Completed', total: 680 }
    ];
  }

  prepareCharts() {
    // Line chart - revenue trend
    this.lineData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [
        {
          label: 'Revenue',
          data: [1200, 1900, 3000, 2500, 3200, 4100, 5000, 6200],
          fill: true,
          tension: 0.4,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66,165,245,0.1)'
        }
      ]
    };

    // Bar chart - monthly orders
    this.barData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [
        {
          label: 'Orders',
          backgroundColor: '#66BB6A',
          data: [120, 150, 180, 140, 200, 220, 260, 300]
        }
      ]
    };

    // Pie chart - category distribution
    this.pieData = {
      labels: ['Accessories', 'Electronics', 'Fitness', 'Clothing'],
      datasets: [
        {
          data: [35, 25, 20, 20],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC']
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#495057' } }
      },
      scales: {
        x: { ticks: { color: '#6c757d' } },
        y: { ticks: { color: '#6c757d' } }
      }
    };
  }

  prepareActivities() {
    this.activities = [
      { time: '10:02', text: 'New order received #O-9005', user: 'System' },
      { time: '09:40', text: 'Product Bamboo Watch low stock', user: 'Inventory' },
      { time: '08:20', text: 'User Ahmed signed up', user: 'Auth' },
      { time: '07:50', text: 'Campaign: Summer Sale started', user: 'Marketing' }
    ];
  }

  // Quick add product
  addQuickProduct() {
    if (this.quickForm.invalid) return;
    const v = this.quickForm.value;
    const newProduct: Product = {
      id: 'P-' + Math.floor(Math.random() * 9000 + 1000),
      name: v.name,
      category: v.category,
      price: v.price,
      stock: v.stock,
      status: v.stock > 10 ? 'INSTOCK' : v.stock > 0 ? 'LOWSTOCK' : 'OUTOFSTOCK',
      image: 'https://via.placeholder.com/80'
    };
    this.products = [newProduct, ...this.products];
    this.activities.unshift({ time: this.getTimeNow(), text: `Product added: ${newProduct.name}`, user: 'You' });
    this.quickForm.reset({ name: '', category: null, price: 0, stock: 0, available: true });
  }

  openEdit(product: Product) {
    this.editingProduct = { ...product };
    this.displayProductDialog = true;
  }

  saveEdit() {
    if (!this.editingProduct) return;
    this.products = this.products.map(p => (p.id === this.editingProduct!.id ? this.editingProduct! : p));
    this.displayProductDialog = false;
    this.activities.unshift({ time: this.getTimeNow(), text: `Product updated: ${this.editingProduct.name}`, user: 'You' });
    this.editingProduct = null;
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
    this.activities.unshift({ time: this.getTimeNow(), text: `Product deleted: ${product.name}`, user: 'You' });
  }

  getSeverity(status: Product['status'] | Order['status']) {
    if (status === 'INSTOCK' || status === 'Completed') return 'success';
    if (status === 'LOWSTOCK' || status === 'Pending') return 'warning';
    if (status === 'OUTOFSTOCK' || status === 'Cancelled') return 'danger';
    return 'info';
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.activities.unshift({ time: this.getTimeNow(), text: `${event.files.length} file(s) uploaded`, user: 'Uploader' });
  }

  getTimeNow() {
    const d = new Date();
    return `${d.getHours()}:${('0' + d.getMinutes()).slice(-2)}`;
  }

  // Helpers for filtering (example)
  filteredProducts() {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
