import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTicketTransaction',
  standalone: true
})
export class FormatTicketTransactionPipe implements PipeTransform {

  transform(ticketsAmount: number, transactionType: string): string {
    return transactionType === 'Recarga' ? ticketsAmount.toString() : `- ${ticketsAmount}`
    
  }

}
