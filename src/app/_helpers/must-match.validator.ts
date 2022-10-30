import { FormGroup } from '@angular/forms';

// validador personalizado que verifica si coinciden
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            // retorna otro validador ya encontro un error matchingControl
            return;
        }

        // coloca un error en matchingControl si la validacion fallo
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
