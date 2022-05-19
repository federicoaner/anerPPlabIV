import { Component, OnInit } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent implements OnInit {

  nombrePais:string="";
  public forma : FormGroup;

  constructor(private fb: FormBuilder,private firestore: FirestoreService , private router:Router) { 

    this.forma = this.fb.group({
      // 'nombre' : ['',[Validators.required, this.spacesValidator]],
       'codigo' : ['',Validators.required],
       'descripcion' : ['',Validators.required],
       'precio' : ['',Validators.required],
       'stock' : ['',Validators.required],
       'pais' : ['',Validators.required],
       'comestible' : ['',Validators.required],
      // 'terminos' : ['',Validators.required]
       
     });

  }

  recibirPais(pais: any): void {
    this.forma.get('pais')?.setValue(pais);
  }

  agregarProducto(){
  

    this.firestore.agregarAlgo(this.forma.value);
  
    this.forma.reset();
    this.router.navigateByUrl('bienvenida');

  }



  ngOnInit(): void {
  }

}
