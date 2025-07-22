import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../models/department.interface';
import { Province } from '../models/province.interface';
import { District } from '../models/district.interface';
import { Gender } from '../models/gender.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return of([
      {
        no: 'DE-001',
        description: 'Lima' 
      },
    ])
  }
  getProvinces(departmentNo: string): Observable<Province[]> {
    return of([
      {
        no: 'PR-001',
        description: 'Lima' 
      }
    ])
  }
  getDistricts(provinceNo: string): Observable<District[]> {
    return of([
      {
        no: 'DI-001',
        description: 'San Isidro' 
      },
      {
        no: 'DI-002',
        description: 'Pueblo Libre' 
      },
      {
        no: 'DI-003',
        description: 'Jesús María' 
      },
      {
        no: 'DI-004',
        description: 'La Molina' 
      },
    ])
  }

  getGenders(): Gender[] {
    return [
      {
        no: 'm',
        description: 'Masculino' 
      },
      {
        no: 'f',
        description: 'Femenino' 
      },
    ]
  }

}
