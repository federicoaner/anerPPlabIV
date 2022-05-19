import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PruebaSubirComponent } from './componentes/prueba-subir/prueba-subir.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaAlgoComponent } from './componentes/alta-algo/alta-algo.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './componentes/producto-listado/producto-listado.component';
import { ProductoPaisComponent } from './componentes/producto-pais/producto-pais.component';
import { AbmContainerComponent } from './componentes/abm-container/abm-container.component';
import { AltaContainerComponent } from './componentes/alta-container/alta-container.component';
import { ContainerListadoComponent } from './componentes/container-listado/container-listado.component';
import { ModificarContainerComponent } from './componentes/modificar-container/modificar-container.component';
import { BorrarContainerComponent } from './componentes/borrar-container/borrar-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    PruebaSubirComponent,
    TablaPaisesComponent,
    AltaAlgoComponent,
    AltaProductoComponent,
    ProductoDetalleComponent,
    ProductoListadoComponent,
    ProductoPaisComponent,
    AbmContainerComponent,
    AltaContainerComponent,
    ContainerListadoComponent,
    ModificarContainerComponent,
    BorrarContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
