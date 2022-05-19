import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-container-listado',
  templateUrl: './container-listado.component.html',
  styleUrls: ['./container-listado.component.scss']
})
export class ContainerListadoComponent implements OnInit {

  @Output() containerDetalle = new EventEmitter<string>();
  listadoContainers : Observable<any[]>;
  constructor(private firestore :FirestoreService) { 

    this.listadoContainers=this.firestore.getContainer();
  }

  ngOnInit(): void {
  }


  enviarPedido (container:any){
     
    //console.log (container);
    this.containerDetalle.emit(container);
 
   }

}
