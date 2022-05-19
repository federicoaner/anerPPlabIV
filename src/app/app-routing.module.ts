import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { PruebaSubirComponent } from './componentes/prueba-subir/prueba-subir.component';

const routes: Routes = [

  {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'prueba',component:PruebaSubirComponent},
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
