import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlgoComponent } from './componentes/alta-algo/alta-algo.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { PruebaSubirComponent } from './componentes/prueba-subir/prueba-subir.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [

  {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'prueba',component:PruebaSubirComponent,canActivate:[AdminGuard]},
  {path: 'alta', component: AltaAlgoComponent},
  {path:'bienvenida/alta-producto',component:AltaProductoComponent},
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
