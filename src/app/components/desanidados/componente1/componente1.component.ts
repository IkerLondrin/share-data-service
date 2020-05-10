import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  mensajeEnviar: string = '';

  constructor(
    private shareDataService: ShareDataService
  ) { }

  ngOnInit(): void {
  }

  sendInfoToB() {
    this.shareDataService.sendData(this.mensajeEnviar);
  }

}
