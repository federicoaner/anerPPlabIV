import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { LoginService } from 'src/app/servicios/login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {


  public miGit:any;
  constructor(private auth:AngularFireAuth,private router:Router,public usuario:LoginService) { }





  Logout(){

    this.auth.signOut();
    this.router.navigateByUrl('login');

  }



  ngOnInit(): void {
  }

}
