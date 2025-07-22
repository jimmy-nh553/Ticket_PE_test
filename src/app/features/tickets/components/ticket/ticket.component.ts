import { Component, Input } from '@angular/core';
import { TicketPackage } from '../../models/ticket-package.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ticket-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {  

  @Input()
  ticketPackage: TicketPackage = {
    no: '',
    name: '',
    description: '',
    price: 0,
    recomended: false
  }
}
