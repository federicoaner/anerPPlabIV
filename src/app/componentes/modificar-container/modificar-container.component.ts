import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.scss']
})
export class ModificarContainerComponent implements OnInit {


  @Input() containerDetalle : any;
  public forma !: FormGroup;
  
  constructor(private fb: FormBuilder,private firestore: FirestoreService) { 

   

     this.forma = this.fb.group({
     // 'codigo' : ['',Validators.required],
      'marca' : ['',Validators.required],
      'capacidad' : ['',Validators.required],
    
    });


  }

  
  ngOnInit(): void {

    this.eventoPedido(this.containerDetalle);
  }

  agregarContainer(){
  

    this.firestore.modificarContainer(this.forma.value,this.containerDetalle.id);
  
    this.forma.reset();
    this.containerDetalle=null;
  }

  eventoPedido(opcion : any){
   // this.forma.get('codigo')?.setValue(opcion.codigo);
    this.forma.get('marca')?.setValue(opcion.marca);
    this.forma.get('capacidad')?.setValue(opcion.capacidad);
 
  }





}
