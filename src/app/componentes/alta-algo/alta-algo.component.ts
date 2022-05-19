import { Component, OnInit } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-alta-algo',
  templateUrl: './alta-algo.component.html',
  styleUrls: ['./alta-algo.component.scss']
})
export class AltaAlgoComponent implements OnInit {

  nombrePais:string="";

  public forma : FormGroup;

  constructor(private fb: FormBuilder,private firestore: FirestoreService) { 

    this.forma = this.fb.group({
      // 'nombre' : ['',[Validators.required, this.spacesValidator]],
       'nombre' : ['',Validators.required],
       'apellido' : ['',Validators.required],
       'dni' : ['',Validators.required],
       'pais' : ['',Validators.required],
       'unidadPropia' : ['',Validators.required],
       'terminos' : ['',Validators.required]
       
     });

  }

  recibirPais(pais: any): void {
    this.forma.get('pais')?.setValue(pais);
  }


  agregarRepartidor(){
  

    this.firestore.agregarAlgo(this.forma.value);
  
    this.forma.reset();
  }






  ngOnInit(): void {
  }

}
