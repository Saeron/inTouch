import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataclientService } from '../dataclient.service';

//volver a pensar en cambiarlo, y ponerlo como hijo de listado, para tenerlos como unica pagina
//y asi no perder la informacion al refrescar


interface cliente {
  nombre: string,
  telefono: string,
  email: string,
  fechaini: string
}

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  client: cliente;

 
    

  constructor(private router: Router,
    private data: DataclientService) { }

  ngOnInit() {
    this.client = this.data.getClient();
    if (!this.client){
      this.router.navigate(['listado']);
    }
    
  }

  mostrar(){
    console.log(this.client);
  }

  listado(){
    this.router.navigate(['listado']);
  }

  modificar(){
    this.router.navigate(['mod']);
  }

  ponerAlarma(){
    this.router.navigate(['alarms']);
  }

  
}
