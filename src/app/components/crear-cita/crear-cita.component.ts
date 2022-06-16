import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre = ''; // se bindean desde el formulario con la directiva ngModel
  fecha = ''; // se bindean desde el formulario con la directiva ngModel
  hora = ''; // se bindean desde el formulario con la directiva ngModel
  sintomas = ''; // se bindean desde el formulario con la directiva ngModel

  formularioIncorrecto = false;

  // enviaremos CITA a travez del decorador output, eventEmitter tipo any, se puede especificar.
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto  = false;
      // CREAMOS UN OBJETO CITA
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas,
    }

    this.resetCampos();
    console.log(CITA)
  }

  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }




}
