import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ClienteDatos} from './cliente-datos';

interface cliente {
  nombre: string,
  telefono: string,
  email: string,
  fechaini: string
}

interface dbResponse {
  success: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<ClienteDatos>('/api/list.php');
  }

  store(cliente: any) {

    //console.log(cliente);
    return this.http.post('/api/store.php', cliente)
      .subscribe((data) => {
        console.log(data)
      }, (error) => {
        console.log('error de conexion', error)
      });
  }

  borrar(cliente:any){
    return this.http.post('/api/delete.php', cliente)
      .subscribe((data) => {
        console.log(data)
      }, (error) => {
        console.log('error de conexion', error)
      });
  }

  modificar(cliente:any) {
    return this.http.post<dbResponse>('/api/modify.php',cliente);
  }

  }


