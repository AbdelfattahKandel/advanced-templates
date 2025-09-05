import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadImageService {
  uploadImage(file: File, folder: string) {
    console.log('Mock upload:', file);

    const fakeFileName = `${folder}/${Date.now()}-${file.name}`;

    return of({ file: fakeFileName }).pipe(delay(1000));
  }

  uploadVideo(file: File, folder: string) {
    console.log('Mock upload:', file);

    const fakeFileName = `${folder}/${Date.now()}-${file.name}`;

    return of({ file: fakeFileName }).pipe(delay(1200));
  }
}
