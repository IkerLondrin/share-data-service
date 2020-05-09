import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  mensajeEnviar: string;

  constructor(
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
  }

  sendInfoToB() {
    this.shareDataService.sendData(this.mensajeEnviar);
  }

}
