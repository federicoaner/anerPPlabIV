import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  algoCollection:any;

  algo:any;


  constructor(private firestore:AngularFirestore) {

    this.algoCollection=this.firestore.collection('algo');
    this.algo=this.algoCollection.valueChanges();
   }




   getAlgo(){

    return this.algo;
   }

   agregarAlgo(object:any){

    this.firestore.collection('algo').add(object);
   }



}
