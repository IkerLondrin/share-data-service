import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  mensajeRecibido: string;
  constructor(
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
    // Nos suscribimos al mensaje que le ha llegado al servicio!
    this.shareDataService.dataSubject.subscribe(msg => {
      this.mensajeRecibido = msg
    });
  }

}
