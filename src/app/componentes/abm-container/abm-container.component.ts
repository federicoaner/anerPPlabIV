import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.scss']
})
export class AbmContainerComponent implements OnInit {


  containerDetalle: any;
  constructor() { }


  recibirContainer(container:any){

    this.containerDetalle=container;
   console.log("llego a abm",container)

  }

  ngOnInit(): void {
  }

}
