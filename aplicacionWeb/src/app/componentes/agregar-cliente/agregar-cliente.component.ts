import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';



import { Router } from '@angular/router';

//consumiendo servicio
import { CrudService } from 'src/app/servicio/crud.service';

//validador
//import { FormGroup,  } from '@angular/forms';



@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  formularioClientes:FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public formulario:FormBuilder , private crudService:CrudService, private ruteador:Router) {
  
    this.formularioClientes=this.formulario.group({
      nombre:['',Validators.pattern(/^[a-zA-Z]+$/)],
      apellido:['',Validators.pattern(/^[a-zA-Z]+$/)],
      email: new FormControl('',[Validators.pattern(this.emailPattern)]),
      dni:[''],
      fechaNac:[''],
      edad:['']
    });
    
   }

  ngOnInit(): void {
  }

  enviarDatos():any {
    
    //console.log(this.formularioClientes.value);
    if(this.formularioClientes.valid){
      this.crudService.AgregarEmpleado(this.formularioClientes.value).subscribe();
      this.ruteador.navigateByUrl('/listar-cliente'); //volver a la pagina listar
    }
    else{
      alert("Datos Ingresados no validos");

    }
  }

  get nombre(){ return this.formularioClientes.get('nombre')};
  get apellido(){ return this.formularioClientes.get('apellido')};
  get email(){ return this.formularioClientes.get('email')};
    

  

}
