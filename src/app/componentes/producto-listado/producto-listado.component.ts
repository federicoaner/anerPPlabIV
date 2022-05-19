import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.scss']
})
export class ProductoListadoComponent implements OnInit {

  listadoProductos : Observable<any[]>;

  //@Output() productoDetalle = new EventEmitter<string>();
  @Output() productoOutput: EventEmitter<any>= new EventEmitter<any>();
 //@Output() productoDetalle: EventEmitter<any>= new EventEmitter<any>();
 
  constructor(private firestore :FirestoreService) { 

    this.listadoProductos=this.firestore.getProducto();
  }

  enviarProducto(producto:Producto){
     
    console.log (producto);
    this.productoOutput.emit(producto);
 
   }

  ngOnInit(): void {
  }

}
