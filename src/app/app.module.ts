import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';
import { PruebaSubirComponent } from './componentes/prueba-subir/prueba-subir.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    PruebaSubirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
