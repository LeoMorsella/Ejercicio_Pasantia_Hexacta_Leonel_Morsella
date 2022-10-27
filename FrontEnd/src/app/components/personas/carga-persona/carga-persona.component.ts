import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-carga-persona',
  templateUrl: './carga-persona.component.html',
  styleUrls: ['./carga-persona.component.css']
})
export class CargaPersonaComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      dni:0,
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]]

    })
   }

  ngOnInit(): void {
  }
  
  guardarPersona() {
    console.log(this.form)
  }

}
