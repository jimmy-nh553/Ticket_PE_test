import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.interface';
import { catchError, EMPTY, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User = {} as User;

  constructor(private _http: HttpClient) {}

  get userInfo(): User {      
    return this._user;
  }

  getUserInfo(): Observable<User> {  
    return of({
      numDoc: '8765432',
      docType: 'DNI',
      name: 'Usuario',
      partenalLastName: 'Prueba',
      maternalLastName: '1',
      phoneNumber: '999888777',
      address: 'Av Principal 1500',
      district: 'Pueblo Libre',
      department: 'Lima',
      province: 'Lima',
      gender: 'Masculino',
      birthdate: new Date('2007/09/12'),
      email: 'usuario_prueba1@gmail.com',

      representativeName: '',
      representativePartenalLastName: '',
      representativeMartenalLastName: '',
      representativeNumDoc: '',
      representativePhoneNumber: '',

      tickets: 100,
      userInitials: '',

      districtObj: {no: '',description: ''},
      departmentObj: {no: '',description: ''},
      provinceObj: {no: '',description: ''},
      genderObj: {no: '',description: ''}
    }).pipe(
      map(user => {
        return {
          ...user,
          userInitials: `${user.name.slice(0,1)}${user.partenalLastName.slice(0,1)}`,
        }
      }),
      tap(user => this._user = user),
      catchError(err => {
        console.log({err});
        return EMPTY;        
      })
    );    
  }
}
