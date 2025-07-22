import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Department } from '../../../company/models/department.interface';
import { District } from '../../../company/models/district.interface';
import { Gender } from '../../../company/models/gender.interface';
import { Province } from '../../../company/models/province.interface';
import { User } from '../../models/user.interface';
import { CompanyService } from '../../../company/services/company.service';
import { UserService } from '../../services/user/user.service';
import { forkJoin, catchError, of } from 'rxjs';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
  ],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent implements OnInit {
  userCopy: User = {
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
  genders: Gender[] = [];  
  departments: Department[] = [];  
  provinces: Province[] = [];  
  districts: District[] = [];

  constructor(
    private _userService: UserService,
    private _companyService: CompanyService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  // getUserInfo() {    
  //   this._userService.getUserInfo().subscribe(resp => {
  //     this.user = {...resp};
  //   });
  // }

  getData() {
    this.genders = this._companyService.getGenders();
    forkJoin({
      departments: this._companyService.getDepartments().pipe(catchError(() => of(null))),
      user: this._userService.getUserInfo().pipe(catchError(() => of(null))),
    }).subscribe((results) => {
      this.departments = results.departments || []; 
      this.userCopy = results.user || {} as User;
    },
    (error) => {
      console.error('Error loading data', error);
    })    
  }


  getProvinces() {
    this._companyService.getProvinces(this.userCopy.departmentObj.no).subscribe(resp => {
      this.provinces = resp;
    })
  }
  
  getDistricts() {
    this._companyService.getDistricts(this.userCopy.provinceObj.no).subscribe(resp => {
      this.districts = resp;
    })
  }

  getPropertyNo(property: keyof User) {
    const mainProp = this.userCopy[property];
    if(mainProp && typeof mainProp === 'object' &&  'no' in mainProp ) {
      return mainProp.no ?? '';
    }
    return '';
  }

  isMinor() {
    const today = new Date();
    const age = today.getFullYear() - this.userCopy.birthdate.getFullYear();
    const cumpleEsteAnio = new Date(
      today.getFullYear(),
      this.userCopy.birthdate.getMonth(),
      this.userCopy.birthdate.getDate()
    );

    // Si aún no ha cumplido años este año, restamos uno
    return age < 18 || (age === 18 && today < cumpleEsteAnio);
  }
}
