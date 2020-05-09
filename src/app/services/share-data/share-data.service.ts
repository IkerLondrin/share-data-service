import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  dataSubject = new Subject<string>();

  constructor() { }

  sendData(msg: string) {
    this.dataSubject.next(msg);
  }
}
