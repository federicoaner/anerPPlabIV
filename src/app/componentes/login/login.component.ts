import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'sala-de-juegos';
  responseMessage : boolean | string =false;

  miusuario:Usuario;

  email: string;
  password: string;
  alertError : string = "";
  perfil:string="";


  constructor (private router:Router,private firestore:AngularFirestore, public auth:LoginService ){
    this.miusuario=new Usuario;
    this.email="";
    this.password="";
    this.perfil="";
  };

  
  Loguearse(){
    try{

      let user = {
        email: this.email,
        password: this.password
      }
  
      this.auth.Login(this.email,this.password).then((response)=>{
        this.router.navigateByUrl('/bienvenida');

      })
  

      .catch(err =>{
        //this.responseMessage = err.message;
        switch(err.code)
        {
          case 'auth/invalid-email':
           this.responseMessage= 'Email invalido.';
            break;     
          case 'auth/user-disabled':
            this.responseMessage= 'Usuario deshabilitado.';
            break;
          case 'auth/user-not-found':
            this.responseMessage= 'Usuario no encontrado.';
            break;       
          case 'auth/wrong-password':
            this.responseMessage= 'Contrasenia incorrecta.';
            break;  
          case 'auth/user-not-found':
            this.responseMessage='Usuario no encontrado.';
            break;
          default:
            this.responseMessage = 'Error';
        }
        console.log('Error en login.ts: ',err);
      }); 

    }catch(err){
      console.log("Error ingresar",err);
    }
  }
  

  
 AccesoRapido(){
  this.email = 'admin@admin.com';
  this.password = 'admin1234';
  this.perfil="admin";
  //this.router.navigateByUrl('/home');

}

AccesoRapidoEmpleado(){
  this.email = 'empleado@empleado.com';
  this.password = 'empleado1234';
  this.perfil="empleado";
  //this.router.navigateByUrl('/home');

}




  ngOnInit(): void {
  }

}
