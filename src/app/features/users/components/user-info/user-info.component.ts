import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.interface';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { Department } from '../../../company/models/department.interface';
import { District } from '../../../company/models/district.interface';
import { Province } from '../../../company/models/province.interface';
import { Gender } from '../../../company/models/gender.interface';

@Component({
  selector: 'user-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit { 

  @Input()
  user: User = {
    numDoc: '',
    docType: '',
    name: '',
    partenalLastName: '',
    maternalLastName: '',
    phoneNumber: '',
    address: '',
    district: '',
    department: '',
    province: '',
    gender: '',
    birthdate: new Date(),
    email: '',

    representativeName: '',
    representativePartenalLastName: '',
    representativeMartenalLastName: '',
    representativeNumDoc: '',
    representativePhoneNumber: '',

    tickets: 0,
    userInitials: '',

    districtObj: {no: '',description: ''},
    departmentObj: {no: '',description: ''},
    provinceObj: {no: '',description: ''},
    genderObj: {no: '',description: ''}
  }

  // selects
  @Input()
  genders: Gender[] = [];
  @Input()
  departments: Department[] = [];
  @Input()
  provinces: Province[] = [];
  @Input()
  districts: District[] = [];

  // events
  @Output()
  onDepartmentSelected: EventEmitter<Department> = new EventEmitter();
  @Output()
  onProvinceSelected: EventEmitter<Province> = new EventEmitter();

  constructor() {}

   ngOnInit(): void {
    
  }

  provinceChange() {
    this.onProvinceSelected.emit(this.user.provinceObj);
  }

  departmentChange() {
    this.onDepartmentSelected.emit(this.user.departmentObj);
  }

  getPropertyNo(property: keyof User) {
    const mainProp = this.user[property];
    if(mainProp && typeof mainProp === 'object' &&  'no' in mainProp ) {
      return mainProp.no ?? '';
    }
    return '';
  }

  isMinor() {
    const today = new Date();
    const age = today.getFullYear() - this.user.birthdate.getFullYear();
    const cumpleEsteAnio = new Date(
      today.getFullYear(),
      this.user.birthdate.getMonth(),
      this.user.birthdate.getDate()
    );

    // Si aún no ha cumplido años este año, restamos uno
    return age < 18 || (age === 18 && today < cumpleEsteAnio);
  }

}
