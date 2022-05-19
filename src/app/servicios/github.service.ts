import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url='https://api.github.com/users/federicoaner';


  constructor(private miHttp: HttpClient) { }


  getUsuario(){
    return this.miHttp.get(this.url);
  }


}
