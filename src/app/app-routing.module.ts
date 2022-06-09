import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from './componentes/abm-container/abm-container.component';
import { AltaAlgoComponent } from './componentes/alta-algo/alta-algo.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './componentes/producto-listado/producto-listado.component';
import { PruebaSubirComponent } from './componentes/prueba-subir/prueba-subir.component';
import { AdminGuard } from './guards/admin.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [

  {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'bienvenida/alta-producto',component:AltaProductoComponent,canActivate:[LoggedGuard]},
  {path:'bienvenida/producto-detalle',component:ProductoDetalleComponent,canActivate:[LoggedGuard]},
  {path:'bienvenida/abm-container',component:AbmContainerComponent,canActivate:[AdminGuard]},
  {path: 'login', component: LoginComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
