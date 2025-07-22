import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrizeInfoAdmin } from '../../models/prize-info-admin.interface';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return [ 
      {
        no: 'p-100',
        itemNo: 'i-100',
        itemName: 'iPhone 16',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        ticketsTotal: 100,
        ticketsProgress: 25,
        purchaseTickets: 0,
        ticketPrice: 10
      },
      {
        no: 'p-101',
        itemNo: 'i-101',
        itemName: 'Play Station 5',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        ticketsTotal: 100,
        ticketsProgress: 45,
        purchaseTickets: 0,
        ticketPrice: 10
      },
      {
        no: 'p-102',
        itemNo: 'i-102',
        itemName: 'Laptop Asus',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        ticketsTotal: 200,
        ticketsProgress: 129,
        purchaseTickets: 0,
        ticketPrice: 10
      },
      {
        no: 'p-103',
        itemNo: 'i-103',
        itemName: 'Televisor Samsung 50 pulgadas',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        ticketsTotal: 150,
        ticketsProgress: 58,
        purchaseTickets: 0,
        ticketPrice: 10
      },
      {
        no: 'p-104',
        itemNo: 'i-104',
        itemName: 'Nintendo Switch',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        ticketsTotal: 200,
        ticketsProgress: 180,
        purchaseTickets: 0,
        ticketPrice: 10
      },
    ]
  }

  getAllAdmin(): Observable<PrizeInfoAdmin[]> {
    return of([ 
      {
        no: 'p-100',
        itemNo: 'i-100',
        itemName: 'iPhone 16',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 4000,
        profitPercentage: 25,
        totalIncProfit: 5000,
        ticketPrice: 10,
        ticketsTotal: 500,
        ticketsProgress: 370,
        isFinished: false,
        winnerName: '',
        winnerDoc: '',
        startDateTime: new Date('2025/07/10'),
        finishDateTime: undefined,  
        itemObj: {
          itemNo: 'i-100',
          itemName: 'iPhone 16',
          imageUrl: 'https://placehold.co/250x150/000000/FFF',
          itemPrice: 4000,
        }
      },
      {
        no: 'p-101',
        itemNo: 'i-101',
        itemName: 'Play Station 5',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 2000,
        profitPercentage: 15,
        totalIncProfit: 2300,
        ticketPrice: 10,
        ticketsTotal: 230,
        ticketsProgress: 120,
        isFinished: false,
        winnerName: '',
        winnerDoc: '',
        startDateTime: new Date('2025/07/10'),
        finishDateTime: undefined, 
        itemObj: {
          itemNo: 'i-101',
          itemName: 'Play Station 5',
          imageUrl: 'https://placehold.co/250x150/000000/FFF',
          itemPrice: 2000,
        }
      },
      {
        no: 'p-102',
        itemNo: 'i-102',
        itemName: 'Laptop Asus',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 2000,
        profitPercentage: 35,
        totalIncProfit: 2700,
        ticketPrice: 10,
        ticketsTotal: 270,
        ticketsProgress: 200,
        isFinished: false,
        winnerName: '',
        winnerDoc: '',
        startDateTime: new Date('2025/07/10'),
        finishDateTime: undefined, 
        itemObj: {
          itemNo: 'i-102',
          itemName: 'Laptop Asus',
          imageUrl: 'https://placehold.co/250x150/000000/FFF',
          itemPrice: 2000,
        }
      },
      {
        no: 'p-103',
        itemNo: 'i-103',
        itemName: 'Televisor Samsung 50 pulgadas',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 1800,
        profitPercentage: 15,
        totalIncProfit: 2070,
        ticketPrice: 9,
        ticketsTotal: 230,
        ticketsProgress: 150,
        isFinished: false,
        winnerName: '',
        winnerDoc: '',
        startDateTime: new Date('2025/07/10'),
        finishDateTime: undefined, 
        itemObj: {
          itemNo: 'i-103',
          itemName: 'Televisor Samsung 50 pulgadas',
          imageUrl: 'https://placehold.co/250x150/000000/FFF',
          itemPrice: 1800,
        }
      },
      {
        no: 'p-104',
        itemNo: 'i-104',
        itemName: 'Nintendo Switch',
        imageUrl: 'https://placehold.co/250x150/000000/FFF',
        itemPrice: 2000,
        profitPercentage: 15,
        totalIncProfit: 2400,
        ticketPrice: 8,
        ticketsTotal: 300,
        ticketsProgress: 180,
        isFinished: false,
        winnerName: '',
        winnerDoc: '',
        startDateTime: new Date('2025/07/10'),
        finishDateTime: undefined, 
        itemObj: {
          itemNo: 'p-104',
          itemName: 'Nintendo Switch',
          imageUrl: 'https://placehold.co/250x150/000000/FFF',
          itemPrice: 2000,
        }
      },
    ])
  }

}
