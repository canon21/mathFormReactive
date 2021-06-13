import { Directive, ElementRef  } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter} from 'rxjs/operators'

@Directive({
  selector: '[appAnswerHighLight]'
})
export class AnswerHighLightDirective {

  constructor(private el: ElementRef, private controlName: NgControl) {
    console.log(this.el);
    console.log(this.controlName);
   }

   ngOnInit() {
     //Another observable on Form group.
     this.controlName.control.parent.valueChanges
      .pipe(
        map(({a, b, answer}) => Math.abs((a + b - answer) / (a + b)))
        //filter((value) => value < 0.20 )
      )
      .subscribe(value => {
        if(value < 0.20)
          this.el.nativeElement.classList.add('close');
        else
          this.el.nativeElement.classList.remove('close');
      });
   }
}
