import { Component, Input } from '@angular/core';
import { Winner } from '../../models/winner.interface';
import { CommonModule } from '@angular/common';
import { WinnerItemComponent } from '../winner-item/winner-item.component';

@Component({
  selector: 'winners-container',
  standalone: true,
  imports: [
    CommonModule,
    WinnerItemComponent,
  ],
  templateUrl: './winners-container.component.html',
  styleUrl: './winners-container.component.css'
})
export class WinnersContainerComponent {

  @Input()
  winners: Winner[] = [];


}
