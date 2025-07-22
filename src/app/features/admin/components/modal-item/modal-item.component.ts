import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Item } from '../../interfaces/item.interface';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'admin-modal-item',
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
    DialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './modal-item.component.html',
  styleUrl: './modal-item.component.css'
})
export class ModalItemComponent implements OnInit, OnChanges {
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

  @Input()
  mode: 'edit' | 'create' =  'create';

  @Input()
  item: Item = {
    itemNo: '',
    itemName: '',
    imageUrl: '',
    itemPrice: 0
  }

  constructor(
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.setTitle();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['mode']) {
      this.setTitle();
    }
  }

  setTitle() {
    if(this.mode === 'create') {
      this.title = 'Crear item';
      return;
    }
    this.title = `Item ${this.item.itemName}`;
  }

  toggleVisibility() {
    this.visible = !this.visible;
    this.clearInputs();
  }

   dataIsInvalid() {
    return this.item.itemName.trim().length === 0 || this.item.itemPrice <= 0       
  }

  saveItem() {

    this.toggleVisibility();
  }

  clearInputs() {
    this.item = {
      itemNo: '',
      itemName: '',
      imageUrl: '',
      itemPrice: 0
    }
  }

  createConfirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: `¿Está seguro que desea crear el item ${this.item.itemName}?`,
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
                this.saveItem();
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
