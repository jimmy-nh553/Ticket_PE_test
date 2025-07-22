import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderFooterContainerComponent } from '../../../../shared/components/header-footer-container/header-footer-container.component';
import { PrizeContainerComponent } from '../../../prizes/components/prize-container/prize-container.component';
import { Prize } from '../../../prizes/models/prize.interface';
import { PrizeService } from '../../../prizes/services/prize/prize.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFooterContainerComponent,
    PrizeContainerComponent,
    RouterModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  prizes: Prize[] = [];

  constructor(
    private _prizeService: PrizeService,
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
    this.prizes = this._prizeService.getAll();
  }
}
