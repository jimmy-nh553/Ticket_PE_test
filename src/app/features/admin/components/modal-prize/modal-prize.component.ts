import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { PrizeInfoAdmin } from '../../../prizes/models/prize-info-admin.interface';
import { Item } from '../../interfaces/item.interface';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'admin-modal-prize',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DatePickerModule,
    InputTextModule,
    SelectModule,
    DialogModule,
    InputNumberModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './modal-prize.component.html',
  styleUrl: './modal-prize.component.css'
})
export class ModalPrizeComponent implements OnInit, OnChanges {
  
  private _visible: boolean = false;
  @Input()
  get visible() {
    return this._visible;
  }
  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter();
  set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(value);
  }

  title: string = '';
  minDate: Date = new Date();

  @Input()
  mode: 'edit' | 'create' =  'create';

  @Input()
  prize: PrizeInfoAdmin = {
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

  @Input()
  items: Item[] = [];

  constructor(
    private confirmationService: ConfirmationService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['mode']) {
      this.setTitle();
    }
  }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle() {
    if(this.mode === 'create') {
      this.title = 'Crear sorteo';
      return;
    }
    this.title = `Sorteo ${this.prize.no}`;
  }

  priceSelected() {
    this.prize.itemNo = this.prize.itemObj.itemNo;
    this.prize.itemName = this.prize.itemObj.itemName;
    this.prize.itemPrice = this.prize.itemObj.itemPrice;
    this.prize.imageUrl = this.prize.itemObj.imageUrl;

    this.prize.totalIncProfit = this.prize.itemPrice;
    this.calculateTotalIncProfit();
    this.calculateTotalTickets();
  }

  calculateTotalIncProfit() {
    const percentDecimal = this.prize.profitPercentage / 100;        
    this.prize.totalIncProfit = this.prize.itemPrice + (this.prize.itemPrice * percentDecimal);    
  }

  calculateTotalTickets() {
    if(this.prize.ticketPrice > 0) {
      this.prize.ticketsTotal = this.prize.totalIncProfit / this.prize.ticketPrice;
      return;
    }
    this.prize.ticketsTotal = 0;
  }

  calculateTicketPrice() {
    if(this.prize.ticketsTotal > 0) { 
      this.prize.ticketPrice = this.prize.totalIncProfit / this.prize.ticketsTotal;
      return 
    }
    this.prize.ticketPrice = 0;
  }

  convertPorcentageToDecimal(porcentageInt: number) {
    return porcentageInt / 100;
  }

  toggleVisibility() {
    this.visible = !this.visible;
    this.clearInputs();
  }

  dataIsInvalid() {
    return this.prize.itemNo.trim().length === 0 || this.prize.itemName.trim().length === 0 ||
       this.prize.itemPrice <= 0 || 
       this.prize.profitPercentage < 0 || 
       this.prize.totalIncProfit <= 0 || 
       this.prize.ticketPrice <= 0 || 
       this.prize.ticketsTotal <= 0 || 
       !this.prize.startDateTime 
  }

  savePrize() {

    this.toggleVisibility();
  }

  clearInputs() {
    this.prize = {
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
  }


  createConfirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: `¿Está seguro que desea crear el sorteo para el item ${this.prize.itemName}?`,
            header: 'Confirmación',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancelar',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Crear',
            },
            accept: () => {
                // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
                this.savePrize();
            },
            reject: () => {
                // this.messageService.add({
                //     severity: 'error',
                //     summary: 'Rejected',
                //     detail: 'You have rejected',
                //     life: 3000,
                // });
            },
        });
    }

}
