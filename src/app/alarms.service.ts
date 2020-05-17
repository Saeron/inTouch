import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhpResponse } from './php-response';
import { AlarmaDatos } from './alarma-datos';

interface AlarmResponse {
  success: boolean,
  message: string
}

interface alramaid {
  telefono: string
}

interface arrayAlarmResponse extends Array<alramaid>{};

interface AlarmasResponse {
  id: number,
  fechaini: string,
  fechafin: string,
  repeDay: boolean,
  numrep: number,
  telefono: string
}

interface DeleteAlarmResp {
  success: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class AlarmsService {

  constructor(private alarms: AlarmsService,
    private http: HttpClient) { }

  setAlarm(fecha,telefono,repetir,mensaje) {
    return this.http.post<AlarmResponse>('/api/addAlarm.php', {
      fechafin: fecha,
      telefono: telefono,
      repetir: repetir,
      msg: mensaje
    });
  }

  getAlarms() {
    return this.http.get<arrayAlarmResponse>('/api/getAlarms.php');
  }

  getAlarmas(tel){
    return this.http.post<AlarmasResponse>('/api/getAlarmas.php',{
      telefono: tel
    });
  }

  deleteAlarm(ident){
    return this.http.post<DeleteAlarmResp>('/api/deleteAlarm.php',{
    id: ident
    });
  }

  modifyAlarm(alarma: AlarmaDatos){
    return this.http.post<PhpResponse>('/api/modAlarm.php',alarma);
  }

}
