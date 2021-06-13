import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  public getA(): number {
    return this.mathForm.value.a;
    /*
     Accesso al valore del formControl denominato 'a'.
     Oppure mathForm.controls.a.value oppure mathForm.value.a oppure this.mathForm.get('a').value;
    */
  }

  public getB(): number {
    return this.mathForm.value.b;
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

}
