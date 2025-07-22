import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { Prize } from '../../../prizes/models/prize.interface';
import { PrizeInfoAdmin } from '../../../prizes/models/prize-info-admin.interface';
import { ItemsService } from '../../services/items/items.service';
import { catchError, forkJoin, of } from 'rxjs';
import { PrizeService } from '../../../prizes/services/prize/prize.service';
import { ModalPrizeComponent } from '../../components/modal-prize/modal-prize.component';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-admin-prizes-list-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminHeaderComponent,
    TableModule, 
    ButtonModule,
    DatePickerModule,
    InputTextModule,
    DropdownModule,
    ModalPrizeComponent,
  ],
  templateUrl: './admin-prizes-list-page.component.html',
  styleUrl: './admin-prizes-list-page.component.css'
})
export class AdminPrizesListPageComponent implements OnInit {
  modalVisible: boolean = false;
  modalMode: 'edit' | 'create' =  'create';

  selectedPrize: PrizeInfoAdmin = {
    no: '',
    itemNo: '',
    itemName: '',
    imageUrl: '',
    itemPrice: 0,
    profitPercentage: 0,
    totalIncProfit: 0,
    ticketPrice: 0,
    ticketsTotal: 0,
    ticketsProgress: 0,
    isFinished: false,
    winnerName: '',
    winnerDoc: '',
    startDateTime: new Date(),
    finishDateTime: undefined,
    itemObj: {
      itemNo: '',
      itemName: '',
      imageUrl: '',
      itemPrice: 0,
    }
  }
  prizes: PrizeInfoAdmin[] = [];
  items: Item[] = [];

  constructor(
    private _prizeService: PrizeService,
    private _itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    forkJoin({
      prizes: this._prizeService.getAllAdmin().pipe(catchError(() => of(null))),
      items: this._itemsService.getAll().pipe(catchError(() => of(null))),
    }).subscribe((results) => {
      this.prizes = results.prizes || [];        
      this.items = results.items || [];        
    },
    (error) => {
      console.error('Error loading data', error);
    })
  }

  convertPorcentageToDecimal(porcentageInt: number) {
    return porcentageInt / 100;
  }

  newPrize() {
    this.selectedPrize = {
      no: '',
      itemNo: '',
      itemName: '',
      imageUrl: '',
      itemPrice: 0,
      profitPercentage: 0,
      totalIncProfit: 0,
      ticketPrice: 0,
      ticketsTotal: 0,
      ticketsProgress: 0,
      isFinished: false,
      winnerName: '',
      winnerDoc: '',
      startDateTime: new Date(),
      finishDateTime: undefined,
      itemObj: {
        itemNo: '',
        itemName: '',
        imageUrl: '',
        itemPrice: 0,
      }
    }
    this.modalMode = 'create';
    this.toggleVisibility();
  }

  toggleVisibility() {
    this.modalVisible = !this.modalVisible;
  }

  showModal() {
    this.modalMode = 'edit';
    this.toggleVisibility();
  }

}
