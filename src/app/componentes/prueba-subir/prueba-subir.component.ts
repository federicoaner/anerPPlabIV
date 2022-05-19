import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-prueba-subir',
  templateUrl: './prueba-subir.component.html',
  styleUrls: ['./prueba-subir.component.scss']
})
export class PruebaSubirComponent implements OnInit {

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
  }

  listadoPeliculas = [
    { id: 1 ,nombre:"lo que el viento se llevo",tipo: "amor", fechaEstreno: "12/12/2021", cantidadPublico: 123, actor: "roberto de niro" },
    { id: 2 ,nombre:"freddie",tipo: "terror", fechaEstreno: "12/12/2021", cantidadPublico: 123, actor: "oscar gomez" },
  ];

  pelicula:any={id:1,nombre:"pepito"};


  subir(){
    this.firestore.agregarAlgo(this.pelicula);
  }

}
