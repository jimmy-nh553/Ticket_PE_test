import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  
  constructor(private _http: HttpClient) { }

  getPackages() {
    return [
      {
        no: 't-001',
        name: 'Paquete 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 5,
        recomended: false,
      },
      {
        no: 't-002',
        name: 'Paquete 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 8,
        recomended: false,
      },
      {
        no: 't-003',
        name: 'Paquete 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 15,
        recomended: true,
      },
      {
        no: 't-004',
        name: 'Paquete 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 25,
        recomended: false,
      },
    ]
  }
}
