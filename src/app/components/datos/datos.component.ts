import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: []
})
export class DatosComponent implements OnInit {
nombres:string
apellido_paterno:string
apellido_materno:string
correo:string
  constructor() {
    if (screen.width>1000){
      this.nombres="ESCRIBE TU NOMBRE"
      this.apellido_paterno="ESCRIBE TU APELLIDO"
       this.apellido_materno="ESCRIBE TU APELLIDO"
      this.correo="CORREO@EMAIL.COM.MX"
      }
        if(screen.width<1000){
          this.nombres="EJ. JUAN"
          this.apellido_paterno="EJ. LÓPEZ"
           this.apellido_materno="EJ. TOVAR"
          this.correo="TU@EMAIL.COM"
        }


    }

  ngOnInit() {
  }

}
