import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  mathForm = new FormGroup(
    //primo argomento
    {
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('' /*, [Validators.required]*/) //aggiungendo un validator al singolo formControl -> in questo caso answer
    }, //secondo argomento
    [ MathValidators.addition ]  //applicando un validator al tutto il formGroup
  );

  constructor() { }

  ngOnInit(): void {
  }

  /*
  public getA(): number {
    return this.mathForm.value.a;
    
     //Accesso al valore del formControl denominato 'a'.
     //Oppure mathForm.controls.a.value oppure mathForm.value.a oppure this.mathForm.get('a').value;
    
  }

  public getB(): number {
    return this.mathForm.value.b;
  }
  */

  get a() {
    return this.mathForm.value.a;
     /*
     Accesso al valore del formControl denominato 'a'.
     Oppure mathForm.controls.a.value oppure mathForm.value.a oppure this.mathForm.get('a').value;
    */
  }

  get b() {
    return this.mathForm.value.b;
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

}
