import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataclientService } from '../dataclient.service';
import { AlarmsService } from '../alarms.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteDatos } from '../cliente-datos';



@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {
  myform: FormGroup;
  tipos = ['Dias', 'Semanas', 'Meses'];
  fecha: any;
  cliente: ClienteDatos;


  constructor(private data: DataclientService,
    private alarmas: AlarmsService,
    private router: Router) { }

  ngOnInit() {
    this.cliente = this.data.getClient();
    if (!this.data.client) {
      this.router.navigate(['listado']);
    }

    this.myform = new FormGroup({
      tipo: new FormControl(this.tipos[0]),
      numero: new FormControl(),
      repetir: new FormControl(),
      texto: new FormControl("Recordatorio para el usuario " + this.cliente.nombre + " para el día de hoy.")
    });
  }

  divideFechaHora() {
    var splitted = this.data.client.fechaini.split(" ", 2);
    return splitted;
  }

  divideFecha(fecha) {
    var splitted = fecha.split("-", 3);
    return splitted;
  }

  listado() {
    this.router.navigate(['listado']);
  }


  onSubmit() {

    let tipo = this.myform.get('tipo').value;
    let numero = this.myform.get('numero').value;
    this.fecha = new Date();


    if (tipo == "Dias") {
      this.fecha.setDate(this.fecha.getDate() + parseInt(numero));
    } else if (tipo == "Semanas") {
      this.fecha.setDate(this.fecha.getDate() + parseInt(numero) * 7);
    } else {
      //meses
      this.fecha.setMonth(this.fecha.getMonth() + parseInt(numero));
    }

    console.log(this.myform.get('repetir').value);
    if (this.fecha < Date.now()) {
      alert('La fecha no puede ser menor que la inicial');
    } else {
      if (!isNaN(numero)) {
        this.alarmas.setAlarm(
          formatDate(this.fecha, 'yyyy-MM-dd hh:mm:ss', 'en_US').toString(),
          this.data.client.telefono,
          this.myform.get('repetir').value,
          this.myform.get('texto').value
        ).subscribe(
          (data) => {
            console.log(data.message);
          }
        );
      }
    }
    this.myform.reset();

  }
}
