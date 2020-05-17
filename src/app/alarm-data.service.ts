import { Injectable } from '@angular/core';
import { AlarmaDatos } from './alarma-datos';


@Injectable({
  providedIn: 'root'
})
export class AlarmDataService {

  alrma: AlarmaDatos;

  constructor() { }


  setAlarma(alarm){
    this.alrma=alarm;
  }

  getAlarma(){
    return this.alrma;
  }

}
