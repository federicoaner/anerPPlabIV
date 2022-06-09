import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anerParcial';




  public miGit:any;
  constructor(private auth:AngularFireAuth,private router:Router,public usuario:LoginService) { 

    
  }

  
  Logout(){

    this.auth.signOut();
    this.router.navigateByUrl('login');

  }









}
