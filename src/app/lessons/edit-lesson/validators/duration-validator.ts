import { FormControl } from '@angular/forms';

export function durationValidator(control: FormControl) {
    const integerRegex = /^[1-9]+$/;
    const allowed = integerRegex.test(control.value);

    return allowed ? null : { 'notanumber': { value: control.value } };
}
