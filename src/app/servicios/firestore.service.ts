import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  productoColection:any;

  producto:any;


  constructor(private firestore:AngularFirestore) {

    this.productoColection=this.firestore.collection<Producto>('producto');
    this.producto=this.productoColection.valueChanges();
   }




   getProducto(){

    return this.producto;
   }

   agregarAlgo(object:Producto){

    this.firestore.collection('producto').add(object);
   }



}
