import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApiBanderasService } from 'src/app/servicios/api-banderas.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises:any=[];
  @Output() paisOutput: EventEmitter<any>= new EventEmitter<any>();

  constructor(private Api:ApiBanderasService) { 

    this.Api.getPaises().subscribe((data:any)=>{    //retorna observable

      console.log(data);
      this.paises=data;
    
     }); 

  }

  enviarNombrePais (paisNombre:string){
     
    console.log (paisNombre);
    this.paisOutput.emit(paisNombre);
 
   }

  ngOnInit(): void {
  }

}
