import { Component, OnInit } from '@angular/core';
import { DataclientService } from '../dataclient.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

interface cliente {
  nombre: string,
  telefono: string,
  email: string,
  fechaini: string
}


@Component({
  selector: 'app-modifcar',
  templateUrl: './modifcar.component.html',
  styleUrls: ['./modifcar.component.css']
})
export class ModifcarComponent implements OnInit {

  client: cliente;

  myform: FormGroup;

  constructor(private data: DataclientService,
              private router: Router,
              private clientes: ClienteService) { }


  ngOnInit() {
    this.client = this.data.getClient();
    if (!this.client){
      this.router.navigate(['listado']);
    }
    
    this.myform = new FormGroup({
      nombre: new FormControl(this.client.nombre),
      telefono: new FormControl(this.client.telefono),
      email: new FormControl(this.client.email)
    });
  }
  

  //cuando se devuleve a listado no actualiza, hay que actializar a mano

  onSubmit(){
    this.clientes.modificar({
      "username": this.myform.controls['nombre'].value,
      "telefono": this.myform.controls['telefono'].value,
      "email": this.myform.controls['email'].value,
      "id": this.client.telefono
    }).subscribe(
      (data) => {
        console.log(data)
      }
    );
    this.router.navigate(['listado']);
    //window.location.reload();
    //this.router.navigate(["listado"]);

  }
}
