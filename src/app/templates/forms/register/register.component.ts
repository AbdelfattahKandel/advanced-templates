import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, Validators, FormBuilder } from '@angular/forms';

import { VideoUploaderComponent } from "../../../shared/components/video-uploader/video-uploader.component";
import { ImageUploaderComponent } from "../../../shared/components/image-uploader/image-uploader.component";

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password'; 
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { LanguageService } from '../../../core/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    DropdownModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    InputSwitchModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    PasswordModule, 
    VideoUploaderComponent,
    ImageUploaderComponent,
    SelectModule,
    DatePickerModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);

  constructor(public languageService: LanguageService, private router: Router) {
    effect(() => {
      const isArabic = this.languageService.isAr();

      this.countries.set([
        { label: isArabic ? 'مصر' : 'Egypt', value: 'eg' },
        { label: isArabic ? 'السعودية' : 'Saudi Arabia', value: 'sa' },
        { label: isArabic ? 'الإمارات' : 'UAE', value: 'ae' }
      ]);
      
      this.skills.set([
        { label: isArabic ? 'أنجولار' : 'Angular', value: 'angular' },
        { label: isArabic ? 'ريأكت' : 'React', value: 'react' },
        { label: isArabic ? 'فيو' : 'Vue', value: 'vue' }
      ]);

      this.genders.set([
        { label: isArabic ? 'ذكر' : 'Male', value: 'male' },
        { label: isArabic ? 'أنثى' : 'Female', value: 'female' }
      ]);
    });
  }

  form = signal(
    this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control(''),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      phone: this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]),
      country: this.fb.control(null),
      skills: this.fb.control([]),
      agree: this.fb.control(false),
      gender: this.fb.control('male'),
      timeOnly: this.fb.control(null),
      dateTime: this.fb.control(null),
      images: this.fb.array<FormArray>([]),
      videos: this.fb.array<FormArray>([])
    })
  );

  countries = signal<{ label: string, value: string }[]>([]);
  skills = signal<{ label: string, value: string }[]>([]);
  genders = signal<{ label: string, value: string }[]>([]);

  images = computed(() => this.form().get('images') as FormArray);
  videos = computed(() => this.form().get('videos') as FormArray);

  submit() {
    if (this.form().valid) {
      console.log("Form Value:", this.form().value);
    } else {
      console.warn("Form Not Valid");
      this.form().markAllAsTouched();
    }
  }

  isAr() {
    return this.languageService.isAr();
  }
}

