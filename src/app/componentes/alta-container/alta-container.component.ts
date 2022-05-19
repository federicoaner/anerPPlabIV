import { Component, OnInit } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.scss']
})
export class AltaContainerComponent implements OnInit {


  nombrePais:string="";

  public forma : FormGroup;

  constructor(private fb: FormBuilder,private firestore: FirestoreService) { 

    this.forma = this.fb.group({
      // 'nombre' : ['',[Validators.required, this.spacesValidator]],
       'codigo' : ['',Validators.required],
       'marca' : ['',Validators.required],
       'capacidad' : ['',Validators.required],
     
     });

  }


 


  agregarContainer(){
  

    this.firestore.agregarContainer(this.forma.value);
  
    this.forma.reset();
  }


  ngOnInit(): void {
  }

}
