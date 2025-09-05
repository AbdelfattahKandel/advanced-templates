import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


//===================================
//=========primeNg
//===================================
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-video-uploader',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, FileUploadModule, TooltipModule],
  templateUrl: './video-uploader.component.html',
  styleUrl: './video-uploader.component.css'
})
export class VideoUploaderComponent {
  @Input() videos!: FormArray;

  constructor(private fb: FormBuilder, public languageService: LanguageService) {}

  addVideo() { this.videos.push(this.fb.control(null)); }

  removeVideo(index: number) { if (this.videos.length > 0) this.videos.removeAt(index); }

  onFileSelected(event: any, index: number) {
    // const file = event.target.files?.[0];
    // if (!file) return;
    // console.log(file);
    // this.uploadService.uploadImage(file, 'uploads').subscribe({
    //   next: res => this.videos.at(index).setValue(res.file),
    //   error: () => this.notify.error('فشل رفع الفيديو')
    // });

    const file = event.target.files?.[0];
    if (!file) return;
    
    const localUrl = URL.createObjectURL(file);
    this.videos.at(index).setValue(localUrl);
    
    console.log('Mock uploaded file path:', localUrl);
  }
}
