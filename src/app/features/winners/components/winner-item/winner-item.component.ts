import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Winner } from '../../models/winner.interface';
import { FormatDniPipe } from '../../../../shared/pipes/format-dni/format-dni.pipe';

@Component({
  selector: 'winner-item',
  standalone: true,
  imports: [
    CommonModule,
    FormatDniPipe,
  ],
  templateUrl: './winner-item.component.html',
  styleUrl: './winner-item.component.css'
})
export class WinnerItemComponent {

  @Input()
  winner: Winner = {
    itemNo: '',
    itemName: '',
    itemImageUrl: '',
    lotteryNo: '',
    winnerName: '',
    winnerDoc: ''
  };
}
