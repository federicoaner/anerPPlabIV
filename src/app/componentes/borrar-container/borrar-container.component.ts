import { Component, OnInit,Input } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-borrar-container',
  templateUrl: './borrar-container.component.html',
  styleUrls: ['./borrar-container.component.scss']
})
export class BorrarContainerComponent implements OnInit {

  constructor(private firestore:FirestoreService) { }

  @Input() containerDetalle : any;

  ngOnInit(): void {
    console.log( "enborrar", this.containerDetalle)
  }




  borrarContainer1() {
    this.firestore.borrarContainer(this.containerDetalle);
 
   
    this.containerDetalle=null;

  }
 

}
