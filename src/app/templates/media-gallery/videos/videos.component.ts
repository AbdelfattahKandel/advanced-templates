import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CardModule, ButtonModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videos: any[] = [
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnailImageSrc: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
      alt: 'Big Buck Bunny'
    },
    {
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      thumbnailImageSrc: 'https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg',
      alt: 'Bear Video'
    },
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnailImageSrc: 'https://img.youtube.com/vi/YE7VzlLtp-4/0.jpg',
      alt: 'Nature Clip'
    }
  ];

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  activeIndex: number = 0;

  prev() {
    if (this.activeIndex > 0) this.activeIndex--;
  }

  next() {
    if (this.activeIndex < this.videos.length - 1) this.activeIndex++;
  }

  private langService = inject(LanguageService);
  isAr = computed(() => this.langService.isAr());
}
