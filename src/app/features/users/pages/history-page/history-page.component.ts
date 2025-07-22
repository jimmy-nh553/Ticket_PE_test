import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TicketTransaction } from '../../models/ticket-transaction.interface';
import { FormatTicketTransactionPipe } from '../../../../shared/pipes/format-ticket-transaction/format-ticket-transaction.pipe';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormatTicketTransactionPipe,
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {

  ticketTransaction: TicketTransaction[] = [];

  constructor() {}

  ngOnInit(): void {
    this.ticketTransaction = [
      {
        no: 't-100',
        date: new Date('2025-06-20'),
        description: 'Recarga 100 tickets',
        transactionType: 'Recarga',
        ticketsAmount: 100
      },
      {
        no: 't-101',
        date: new Date('2025-06-21'),
        description: 'Sorteo iPhone 15',
        transactionType: 'Participación',
        ticketsAmount: 20
      },
    ]
  }
}
