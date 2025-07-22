import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderFooterContainerComponent } from '../../../../shared/components/header-footer-container/header-footer-container.component';
import { TicketComponent } from '../../components/ticket/ticket.component';
import { TicketPackage } from '../../models/ticket-package.interface';
import { TicketsService } from '../../services/tickets/tickets.service';
import { TicketContainerComponent } from '../../components/ticket-container/ticket-container.component';

@Component({
  selector: 'app-tickets-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFooterContainerComponent,
    TicketContainerComponent,    
  ],
  templateUrl: './tickets-page.component.html',
  styleUrl: './tickets-page.component.css'
})
export class TicketsPageComponent implements OnInit {
  ticketsPackages: TicketPackage[] = [];

  constructor(
    private _ticketsService: TicketsService,
  ) {}
    

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // forkJoin({
    //   prizes: this._prizeService.getAll()
    // })(results) => {
    //   this.prizes = results.prizes || [];        
    // },
    // (error) => {
    //   console.error('Error loading data', error);
    // }

    // TODO: temporal
    this.ticketsPackages = this._ticketsService.getPackages();
  }


}
