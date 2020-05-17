import { Component, OnInit } from '@angular/core';
import { AlarmsService } from '../alarms.service';
import { Router } from '@angular/router';
import { DataclientService } from '../dataclient.service';
import { AlarmaDatos } from '../alarma-datos';
import { AlarmDataService } from '../alarm-data.service';


interface cliente {
  nombre: string,
  telefono: string,
  email: string,
  fechaini: string
}



@Component({
  selector: 'app-lista-alarmas',
  templateUrl: './lista-alarmas.component.html',
  styleUrls: ['./lista-alarmas.component.css']
})
export class ListaAlarmasComponent implements OnInit {

  datos: any;
  clientes: cliente;

  constructor(private alarmas: AlarmsService,
    private router: Router,
    private client: DataclientService,
    private alrmData: AlarmDataService) { }

  async ngOnInit() {
    this.clientes = this.client.getClient();
    if (!this.clientes){
      this.router.navigate(['listado']);
    }


    this.alarmas.getAlarmas(this.clientes.telefono).subscribe(
      (data) => {
        this.datos = data;
      }
    );
  }

  borrar(ident){
    this.alarmas.deleteAlarm(ident).subscribe(
      (data) => {
        console.log(data.message);
      }
    );
  }

  modificar(item: AlarmaDatos){
    this.alrmData.setAlarma(item);
    this.router.navigate(['editAlarm']);
  }


}
