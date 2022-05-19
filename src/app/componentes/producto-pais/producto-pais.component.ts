import { Component, OnInit,Input } from '@angular/core';
import { ApiBanderasService } from 'src/app/servicios/api-banderas.service';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto-pais',
  templateUrl: './producto-pais.component.html',
  styleUrls: ['./producto-pais.component.scss']
})
export class ProductoPaisComponent implements OnInit {

  @Input() productoElegido: Producto|any;
  paises:any=[];

  constructor(private api: ApiBanderasService) { 

    this.api.getPaises().subscribe((data:any)=>{    //retorna observable

      console.log("repartidor pais: " + data);
     this.paises=data;
    
     }); 

  }

  ngOnInit(): void {
  }

}
