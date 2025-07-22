import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Item } from '../../interfaces/item.interface';
import { catchError, forkJoin, of } from 'rxjs';
import { ItemsService } from '../../services/items/items.service';
import { ModalItemComponent } from '../../components/modal-item/modal-item.component';

@Component({
  selector: 'app-admin-items-list-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminHeaderComponent,
    TableModule, 
    ButtonModule,
    DatePickerModule,
    InputTextModule,
    DropdownModule,
    ModalItemComponent,
  ],
  templateUrl: './admin-items-list-page.component.html',
  styleUrl: './admin-items-list-page.component.css'
})
export class AdminItemsListPageComponent implements OnInit {
  modalVisible: boolean = false;
  modalMode: 'edit' | 'create' =  'create';

  selectedItem: Item = {
    itemNo: '',
    itemName: '',
    imageUrl: '',
    itemPrice: 0
  }

  items: Item[] = [];
  
  constructor(
    private _itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    forkJoin({
      items: this._itemsService.getAll().pipe(catchError(() => of(null)))
    }).subscribe((results) => {
      this.items = results.items || [];        
    },
    (error) => {
      console.error('Error loading data', error);
    })
  }

  newItem() {
    this.selectedItem = {
      itemNo: '',
      itemName: '',
      imageUrl: '',
      itemPrice: 0
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
