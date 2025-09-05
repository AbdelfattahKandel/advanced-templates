import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '../../../core/services/language.service';

// PrimeNG
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    ImageModule,
    TooltipModule
  ],
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {
  @Input() images!: FormArray;

  constructor(
    private fb: FormBuilder,
    public languageService: LanguageService
  ) {}

  addImage() {
    this.images.push(this.fb.control(null));
  }

  removeImage(index: number) {
    if (this.images.length > 0) {
      this.images.removeAt(index);
    }
  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files?.[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    this.images.at(index).setValue(localUrl);
    console.log('Mock uploaded file path:', localUrl);

    // this.uploadService.uploadImage(file, 'uploads').subscribe({
    //   next: (res) => this.images.at(index).setValue(res.file),
    //   error: () => this.notify.error('فشل رفع الصورة')
    // });
  }
}
