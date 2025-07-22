import { Component, Input } from '@angular/core';
import { TicketPackage } from '../../models/ticket-package.interface';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'ticket-container',
  standalone: true,
  imports: [
    TicketComponent,
  ],
  templateUrl: './ticket-container.component.html',
  styleUrl: './ticket-container.component.css'
})
export class TicketContainerComponent {

  @Input()
  ticketsPackages: TicketPackage[] = [];
}
