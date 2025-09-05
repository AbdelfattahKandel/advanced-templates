import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray, FormGroup, AbstractControl } from '@angular/forms';
import { LanguageService } from '../../../core/services/language.service';

import { VideoUploaderComponent } from "../../../shared/components/video-uploader/video-uploader.component";
import { ImageUploaderComponent } from "../../../shared/components/image-uploader/image-uploader.component";


// Custom Directive Validate
import { ValidateFormsDirective } from '../validate-forms.directive';


@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    ValidateFormsDirective,
    StepperModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
    FloatLabel,
    MultiSelectModule,
    ImageUploaderComponent,
    VideoUploaderComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  ngOnInit(): void {
  }
  activeStep: number = 1;
  private _fb = inject(FormBuilder);
  public languageService = inject(LanguageService);

  basicData = signal(this._fb.group({
    title: [''],
    description: [null],
    password: [''],
  }));

  uploadMedia = signal(
    this._fb.group({
      title: [''],
      images: this._fb.array<FormArray>([]),
      videos: this._fb.array<FormArray>([]),
    }))
  images = computed(() => this.uploadMedia().get('images') as FormArray);
  videos = computed(() => this.uploadMedia().get('videos') as FormArray);

  additionalData = signal(
    this._fb.group({
      skills: [[]],
      interests: [[]],
      title: [''],
      description: [''],
    })
  )

  skills = computed(() => [
    { label: this.isAr() ? 'انجولار' : 'Angular', value: 'angular' },
    { label: this.isAr() ? 'ريأكت' : 'React', value: 'react' },
    { label: this.isAr() ? 'فيو' : 'Vue', value: 'vue' },
  ]);

  interests = computed(() => [
    { label: this.isAr() ? 'اغاني' : 'Music', value: 'music' },
    { label: this.isAr() ? 'الرياضات' : 'Sports', value: 'sports' },
    { label: this.isAr() ? 'افلام' : 'Movies', value: 'movies' },
  ]);



  onSubmit() {
    const allData = {
      basicData: this.basicData().value,
      uploadMedia: this.uploadMedia().value,
      additionalData: this.additionalData().value
    };

    const allValid =
      this.basicData().valid &&
      this.uploadMedia().valid &&
      this.additionalData().valid;

    if (allValid) {
      console.log('All Step Data:', allData);
    } else {
      this.basicData().markAllAsTouched();
      this.uploadMedia().markAllAsTouched();
      this.additionalData().markAllAsTouched();
      console.warn('Some fields are invalid');
    }
  }
  getFieldValidationClass(control: AbstractControl | null): string {
    if (!control) return '';
    return control.invalid && (control.dirty || control.touched) ? 'p-invalid' : '';
  }

  shouldShowValidation(control: AbstractControl | null): boolean {
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  isAr() {
    return this.languageService.isAr();
  }
}
