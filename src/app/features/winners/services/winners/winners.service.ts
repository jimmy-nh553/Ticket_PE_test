import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return [ 
      {
        itemNo: 'i-100',
        itemName: 'iPhone 16',
        itemImageUrl: 'https://placehold.co/250x150/000000/FFF',
        lotteryNo: 'lot-100',
        winnerName: 'Lorem ipsum dolor sit',
        winnerDoc: '12345678',
      },
      {
        itemNo: 'i-101',
        itemName: 'Play Station 5',
        itemImageUrl: 'https://placehold.co/250x150/000000/FFF',
        lotteryNo: 'lot-101',
        winnerName: 'amet consectetur adipisicing',
        winnerDoc: '23456789',
      },
      {
        itemNo: 'i-102',
        itemName: 'Laptop Asus',
        itemImageUrl: 'https://placehold.co/250x150/000000/FFF',
        lotteryNo: 'lot-102',
        winnerName: 'Aliquid nisi adipisci quae',
        winnerDoc: '34567890',
      },
      {
        itemNo: 'i-103',
        itemName: 'iPhone 16',
        itemImageUrl: 'https://placehold.co/250x150/000000/FFF',
        lotteryNo: 'lot-103',
        winnerName: 'reprehenderit animi ipsum corporis',
        winnerDoc: '45678901',
      },
      {
        itemNo: 'i-104',
        itemName: 'Televisor Samsung 50 pulgadas',
        itemImageUrl: 'https://placehold.co/250x150/000000/FFF',
        lotteryNo: 'lot-104',
        winnerName: 'accusantium aspernatur placeat',
        winnerDoc: '56789012',
      },
    ]
  }

}
