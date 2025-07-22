import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuantityInputComponent } from '../../../../shared/components/quantity-input/quantity-input.component';
import { Prize } from '../../models/prize.interface';
import { MeterGroupModule, MeterItem } from 'primeng/metergroup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prize-item',
  standalone: true,
  imports: [
    CommonModule,
    QuantityInputComponent,
    MeterGroupModule,
  ],
  templateUrl: './prize-item.component.html',
  styleUrl: './prize-item.component.css'
})
export class PrizeItemComponent implements OnChanges {  
  @Input()
  prize: Prize = {
    no: '',
    itemNo: '',
    itemName: '',
    imageUrl: '',
    ticketsTotal: 0,
    ticketsProgress: 0,
    purchaseTickets: 0,
    ticketPrice: 0
  }

  progress: {value: number, color1: string, color2: string}[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['prize']) {
     this.prizeProgressMeter();
    }
  }

  prizeProgressMeter() {
    const progressProcertange = this.calculatePorcentage(this.prize.ticketsTotal, this.prize.ticketsProgress);
    if(progressProcertange > 50) {
      this.progress = [
        { value: 50, color1: '#388E3C', color2: '#ADC34A' },
        { value: progressProcertange - 50, color1: '#FBC02D', color2: '#D32F2F'  },
      ];
      return;
    }
    this.progress = [
        { value: progressProcertange, color1: '#388E3C', color2: '#ADC34A'  },
      ];
  }

  calculatePorcentage(total: number, quantity: number) {
    return (quantity * 100) / total;
  }

  
}
