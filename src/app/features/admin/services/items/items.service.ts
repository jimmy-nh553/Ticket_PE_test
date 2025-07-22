import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return of([ 
      {
        itemNo: 'i-100',
        itemName: 'iPhone 16',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 4000,
      },
      {
        itemNo: 'i-101',
        itemName: 'Play Station 5',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 2000,
      },
      {
        itemNo: 'i-102',
        itemName: 'Laptop Asus',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 2000,
      },
      {
        itemNo: 'i-103',
        itemName: 'Televisor Samsung 50 pulgadas',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 1800,
      },
      {
        itemNo: 'i-104',
        itemName: 'Nintendo Switch',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 2000,
      },
    ])
  }
}
