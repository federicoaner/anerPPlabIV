import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  productoColection:any;

  producto:any;

  containerColection:any;
  container:any;


  constructor(private firestore:AngularFirestore) {

    this.productoColection=this.firestore.collection<Producto>('producto');
    this.producto=this.productoColection.valueChanges();

    this.containerColection=this.firestore.collection('container');
    this.container=this.containerColection.valueChanges({idField: 'id'});

   }




   getProducto(){

    return this.producto;
   }

   agregarAlgo(object:Producto){

    this.firestore.collection('producto').add(object);
   }

   
   getContainer(){

    return this.container;
   }

   agregarContainer(object:any){

    this.firestore.collection('container').add(object);
   }

   modificarContainer(object : any, id : any){
   
    console.log("modificado");
    return this.firestore.collection('container').doc(id).update(object);

   
  }

  borrarContainer11(  codigo : any){
   
    console.log("borrado");
    return this.firestore.collection('container').doc(codigo).delete();

   
  }

  getContainerCodigo(container: any) {
    return this.firestore.collection("container", ref => ref.where('codigo', '==', container.codigo)).snapshotChanges();
  }



  borrarContainer(container: any) {
    let doc = this.getContainerCodigo(container).subscribe((containers: any) => {
      const containerId = containers[0].payload.doc.id;
      var containerForDelete = this.firestore.collection("container").doc(containerId);
      containerForDelete.delete()
        .then(() => { })
        .catch((error) => { });
      doc.unsubscribe()
    })

  }



}
