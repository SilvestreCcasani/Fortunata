import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'agregar-cliente'},
  {path:'agregar-cliente',component:AgregarClienteComponent},
  {path:'listar-cliente',component:ListarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
