import { Component, Input } from '@angular/core';
import { PrizeItemComponent } from '../prize-item/prize-item.component';
import { CommonModule } from '@angular/common';
import { Prize } from '../../models/prize.interface';

@Component({
  selector: 'prizes-container',
  standalone: true,
  imports: [
    CommonModule,
    PrizeItemComponent,
  ],
  templateUrl: './prize-container.component.html',
  styleUrl: './prize-container.component.css'
})
export class PrizeContainerComponent {

  @Input()
  prizes: Prize[] = [];
  
}
