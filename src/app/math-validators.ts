import { AbstractControl } from "@angular/forms";

export class MathValidators {
    
    static addition(form : AbstractControl ): object {
        const {a, b, answer } = form.value;
        if( a + b === parseInt(answer)) {
            return null;
        }
        
        return { addition : true};
    }
}
