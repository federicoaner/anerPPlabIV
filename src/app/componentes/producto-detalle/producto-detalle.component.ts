import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {


  unProducto:any;

 
  
  constructor() { }

  recibirProducto(producto:Producto){
 
    this.unProducto=producto;
   console.log ("recibido:  " + producto);


  }

  ngOnInit(): void {
  }

}
