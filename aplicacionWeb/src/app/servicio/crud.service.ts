import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: String='http://localhost/clientes/'; //api de php


  constructor(private clienteHttp:HttpClient) { }

  AgregarEmpleado(datosCliente:Cliente):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosCliente);
  }

  obtenerDatosCliente(){
    return this.clienteHttp.get(this.API+"");
  }
}
