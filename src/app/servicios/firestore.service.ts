import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  productoCollectio:any;

  producto:any;


  constructor(private firestore:AngularFirestore) {

    this.productoCollectio=this.firestore.collection('producto');
    this.producto=this.productoCollectio.valueChanges();
   }




   getProducto(){

    return this.producto;
   }

   agregarAlgo(object:any){

    this.firestore.collection('producto').add(object);
   }



}
