import { Component,  OnInit } from '@angular/core';
import { HeaderFooterContainerComponent } from '../../../../shared/components/header-footer-container/header-footer-container.component';
import { CommonModule } from '@angular/common';
import { Prize } from '../../models/prize.interface';
import { PrizeService } from '../../services/prize/prize.service';
import { catchError, forkJoin, of } from 'rxjs';
import { PrizeContainerComponent } from '../../components/prize-container/prize-container.component';

@Component({
  selector: 'app-prizes-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFooterContainerComponent,
    PrizeContainerComponent,
  ],
  templateUrl: './prizes-page.component.html',
  styleUrl: './prizes-page.component.css'
})
export class PrizesPageComponent implements OnInit {
  
  prizes: Prize[] = [];
  
  constructor(
    private _prizeService: PrizeService,
  ) {}
  
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // forkJoin({
    //   prizes: this._prizeService.getAll()/*.pipe(catchError(() => of(null)))*/
    // }).subscribe((results) => {
    //   this.prizes = results.prizes || [];        
    // },
    // (error) => {
    //   console.error('Error loading data', error);
    // })

    // TODO: temporal
    this.prizes = this._prizeService.getAll();
  }

}
