import { Injectable } from '@angular/core';
import { ClienteDatos } from './cliente-datos';


@Injectable({
  providedIn: 'root'
})
export class DataclientService {

  client: ClienteDatos;

  constructor() { }

  setClient(client: ClienteDatos) {
    this.client = client;
  }

  getClient() {
    return this.client;
  }
}
