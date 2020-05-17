import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { DataclientService } from '../dataclient.service';
import { AlarmsService } from '../alarms.service';

interface cliente {
  nombre: string,
  telefono: string,
  email: string,
  fechaini: string
}

interface alarmaResponse {
  telefono: string
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  datos: cliente;
  cliente: any;
  alarms: Array<alarmaResponse>;


  constructor
    (private clienteServ: ClienteService,
      private router: Router,
      private data: DataclientService,
      private alarmas: AlarmsService) { }

  ngOnInit() {
    this.alarms = new Array<alarmaResponse>();
    this.clienteServ.getList().subscribe((data) => {
      this.datos = data;
    });
    this.alarmas.getAlarms().subscribe(
      (data: Array<alarmaResponse>) => {
        this.alarms = data;
      }
    );
  }

  borrar(item: any) {
    this.clienteServ.borrar(item);
    this.actualizar();
    //console.log("Borrado",item);
  }

  actualizar() {
    this.clienteServ.getList().subscribe((data) => {
      this.datos = data;
    });
    this.alarmas.getAlarms().subscribe(
      (data: Array<alarmaResponse>) => {
        this.alarms = data;
      }
    );
    window.location.reload();
  }

  enviarMail(item: any) {
    console.log("Abriendo mail system", item.email);
  }

  informacion(item: cliente) {

    this.data.setClient(item);
    this.router.navigate(['info']);

  }
  llamar() {
    console.log("Llamando...");
  }
  getCliente() {
    return this.cliente;
  }

  registro() {
    this.router.navigate(['form']);
  }

  listaAlarmas(item){
    this.data.setClient(item);
    this.router.navigate(['listAlarmas']);
  }

  alarm(tel) {
    var esta = false;
    for (let a of this.alarms) {
      if (a['telefono'] == tel) {
        esta = true;
      }
     
    }

    //falta leer el array desde aqui y ver si esta el telefono
    return esta;
  }


}
