import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';


@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  mensajeRecibido: string;

  constructor(
    private shareDataService: ShareDataService
  ) { }

  ngOnInit(): void {
        // Nos suscribimos al mensaje que le ha llegado al servicio!
        this.shareDataService.dataSubject.subscribe(msg => {
          this.mensajeRecibido = msg
        });
  }

}
