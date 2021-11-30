import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  Clientes:any;
  constructor( private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.obtenerDatosCliente().subscribe(respuesta=>{
      
    console.log(respuesta);
    this.Clientes=respuesta;
    
    });
  }

}
