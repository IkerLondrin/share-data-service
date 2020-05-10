import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intermedio-bbb',
  templateUrl: './intermedio-bbb.component.html',
  styleUrls: ['./intermedio-bbb.component.css']
})
export class IntermedioBBBComponent implements OnInit {

  @Input() prueba: string;

  constructor() { }

  ngOnInit(): void {
  }

}
