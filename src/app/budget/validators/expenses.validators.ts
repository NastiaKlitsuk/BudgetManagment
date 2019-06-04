import { ValidatorFn, AbstractControl } from '@angular/forms';

export function actualAmountValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const isValidAmountExpression = /^\d+(\+\d)*$/.test(control.value);
    console.log({ isValidAmountExpression });
    return isValidAmountExpression
      ? null
      : { invalidInput: { value: control.value } };
  };
}
