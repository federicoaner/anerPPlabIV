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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    PruebaSubirComponent,
    TablaPaisesComponent,
    AltaAlgoComponent,
    AltaProductoComponent
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
