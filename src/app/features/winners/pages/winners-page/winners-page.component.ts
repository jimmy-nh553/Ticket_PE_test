import { Component, OnInit } from '@angular/core';
import { HeaderFooterContainerComponent } from '../../../../shared/components/header-footer-container/header-footer-container.component';
import { CommonModule } from '@angular/common';
import { Winner } from '../../models/winner.interface';
import { WinnersService } from '../../services/winners/winners.service';
import { WinnersContainerComponent } from '../../components/winners-container/winners-container.component';

@Component({
  selector: 'app-winners-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFooterContainerComponent,
    WinnersContainerComponent,
  ],
  templateUrl: './winners-page.component.html',
  styleUrl: './winners-page.component.css'
})
export class WinnersPageComponent implements OnInit  {
  winners: Winner[] = [];

  constructor(
    private _winnersService: WinnersService,
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
    this.winners = this._winnersService.getAll();
  }

}
