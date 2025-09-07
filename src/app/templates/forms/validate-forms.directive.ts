import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export type ValidationRule =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'email'
  | 'pattern'
  | 'noNumbers'
  | 'fileRequired'
  | 'multiSelectRequired';

export interface FieldValidation {
  fields: ValidationRule[];
  value?: any;
}

@Directive({
  selector: '[appValidateForms]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateFormsDirective,
      multi: true
    }
  ]
})
export class ValidateFormsDirective implements Validator {

  @Input('appValidateForms') validations: FieldValidation = { fields: [] };

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const errors: ValidationErrors = {};

    for (const field of this.validations.fields) {
      switch (field) {
        case 'required':
          if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
            errors['required'] = true;
          }
          break;

        case 'minLength':
          if (typeof value === 'string' && this.validations.value && value.trim().length < this.validations.value) {
            errors['minLength'] = { requiredLength: this.validations.value, actualLength: value.trim().length };
          }
          break;

        case 'maxLength':
          if (typeof value === 'string' && this.validations.value && value.trim().length > this.validations.value) {
            errors['maxLength'] = { requiredLength: this.validations.value, actualLength: value.trim().length };
          }
          break;

        case 'email':
          if (value && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            errors['email'] = true;
          }
          break;

        case 'pattern':
          if (value && this.validations.value && !(new RegExp(this.validations.value).test(value))) {
            errors['pattern'] = { requiredPattern: this.validations.value, actualValue: value };
          }
          break;

        case 'noNumbers':
          if (value && /\d/.test(value)) {
            errors['noNumbers'] = true;
          }
          break;

        // case 'fileRequired':
        //   if (!value || (Array.isArray(value) && value.length === 0)) {
        //     errors['fileRequired'] = true;
        //   }
        //   break;

        // case 'multiSelectRequired':
        //   if (!Array.isArray(value) || value.length === 0) {
        //     errors['multiSelectRequired'] = true;
        //   }
        //   break;
      }
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }
}

































// import { Directive, Input, signal, computed, effect } from '@angular/core';
// import { AbstractControl } from '@angular/forms';

// export type ValidationRule =
//   | 'required'
//   | 'minLength'
//   | 'maxLength'
//   | 'email'
//   | 'pattern'
//   | 'noNumbers'
//   | 'fileRequired'
//   | 'multiSelectRequired';

// export interface FieldValidation {
//   rules: ValidationRule[];
//   value?: any;
// }

// @Directive({
//   selector: '[appValidateForms]',
//   standalone: true
// })
// export class ValidateFormsSignalDirective {
//   @Input('appValidateForms') validations: FieldValidation = { rules: [] };

//   valueSignal = signal<any>(null);

//   validationErrors = computed(() => {
//     const value = this.valueSignal();
//     const errors: Record<string, any> = {};

//     for (const rule of this.validations.rules) {
//       switch (rule) {
//         case 'required':
//           if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
//             errors['required'] = true;
//           }
//           break;

//         case 'minLength':
//           if (typeof value === 'string' && this.validations.value && value.trim().length < this.validations.value) {
//             errors['minLength'] = { requiredLength: this.validations.value, actualLength: value.trim().length };
//           }
//           break;

//         case 'maxLength':
//           if (typeof value === 'string' && this.validations.value && value.trim().length > this.validations.value) {
//             errors['maxLength'] = { requiredLength: this.validations.value, actualLength: value.trim().length };
//           }
//           break;

//         case 'email':
//           if (value && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
//             errors['email'] = true;
//           }
//           break;

//         case 'noNumbers':
//           if (value && /\d/.test(value)) {
//             errors['noNumbers'] = true;
//           }
//           break;

//         case 'multiSelectRequired':
//           if (!Array.isArray(value) || value.length === 0) {
//             errors['multiSelectRequired'] = true;
//           }
//           break;

//         case 'fileRequired':
//           if (!value || (Array.isArray(value) && value.length === 0)) {
//             errors['fileRequired'] = true;
//           }
//           break;
//       }
//     }

//     return Object.keys(errors).length > 0 ? errors : null;
//   });

//   errorsEffect = effect(() => {
//     const errors = this.validationErrors();
//     if (errors) {
//       console.warn('Validation Errors:', errors);
//     }
//   });
// }
