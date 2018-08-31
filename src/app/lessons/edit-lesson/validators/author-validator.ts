import { FormControl } from '@angular/forms';

export function authorValidator(control: FormControl) {
    const allowed = control.value && control.value.length;
    return allowed ? null : { 'empty': { value: control.value } };
}
