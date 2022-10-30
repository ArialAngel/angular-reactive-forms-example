import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../app/_helpers/must-match.validator';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-forms-example';
  
  registerForm: FormGroup
  submitted=false;

  constructor(private formBuilder: FormBuilder ){}

  ngOnInit() {
    this.registerForm = new FormGroup({
      nombre:new FormControl (['',[Validators.required,Validators.maxLength(15)]]),
      apellido:new FormControl (['',[Validators.required,Validators.maxLength(10)]]),
      usuario:new FormControl (['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]]),
      email:new FormControl (['',[Validators.required,Validators.email,MustMatch]]),
      password:new FormControl (['', [Validators.required, Validators.minLength(6),MustMatch]]),
      confirmPassword:new FormControl (['', Validators.required]),
    })
  }

  get f() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

    // sse detiene aqui si el formulario es invalido
    if (this.registerForm.invalid) {
        return;
    }

    // muestra si el formulario es valido
    alert('Valido!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
