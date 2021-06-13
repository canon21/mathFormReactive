import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export class MathValidators {
    
    static addition(target: string, sourceOne: string, sourceTwo: string ): ValidatorFn {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondoNumber = form.value[sourceTwo];
            if( firstNumber + secondoNumber === parseInt(sum)) {
                return null;
            }
            
            return { addition : true};
        }

    }
}
