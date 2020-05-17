import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  myform: FormGroup;


  constructor(private clienteServ: ClienteService,
              private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      nombre: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit(){
    //console.log(JSON.stringify(this.myform.value));
    this.clienteServ.store(this.myform.value);
    this.myform.reset();
  }

  listado(){
    this.router.navigate(['listado']);
  }
}
