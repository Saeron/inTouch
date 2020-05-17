import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AlarmDataService } from '../alarm-data.service';
import { AlarmaDatos } from '../alarma-datos';
import { AlarmsService } from '../alarms.service';

@Component({
  selector: 'app-editar-alarmas',
  templateUrl: './editar-alarmas.component.html',
  styleUrls: ['./editar-alarmas.component.css']
})
export class EditarAlarmasComponent implements OnInit {

  client: any;
  myform: FormGroup;
  myalarm: AlarmaDatos;
  fecha: string[];

  constructor(
    private router: Router,
    private alramData: AlarmDataService,
    private alarmas: AlarmsService) { }

  ngOnInit() {
    this.myalarm = this.alramData.getAlarma();
    if (!this.myalarm) {
      this.router.navigate(['listado']);
    }

    //trasformo valores iniciales
    var repe: string;
    if (this.myalarm.repeDay) {
      repe = "Si";
    } else {
      repe = "No";
    }

    this.fecha = this.myalarm.fechafin.split(" ", 2);

    this.myform = new FormGroup({
      fechafin: new FormControl(this.fecha[0]),
      repetir: new FormControl()
    });
  }

  onSubmit() {
    if (this.myalarm.fechaini > this.myform.controls['fechafin'].value + " " + this.fecha[1]) {
      //console.log('La fecha no puede ser menor que la inicial');
      alert('La fecha no puede ser menor que la inicial');
    } else {
      console.log(this.myform.controls['repetir'].value);
      this.alarmas.modifyAlarm({
        id: this.myalarm.id,
        fechaini: this.myalarm.fechaini,
        fechafin: this.myform.controls['fechafin'].value + " " + this.fecha[1],
        repeDay: this.myform.get('repetir').value,
        numrep: this.myalarm.numrep,
        telefono: this.myalarm.telefono
      }).subscribe(
        (data) => {
          console.log(data.message);
        }
      );
    }
    this.router.navigate(['listAlarmas']);
  }
}
