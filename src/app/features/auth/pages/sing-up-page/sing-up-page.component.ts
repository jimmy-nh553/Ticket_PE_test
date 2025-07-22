import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { Register } from '../../models/register.interface';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-sing-up-page',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    RouterLink,
    CheckboxModule,
    DatePickerModule,
  ],
  templateUrl: './sing-up-page.component.html',
  styleUrl: './sing-up-page.component.css'
})
export class SingUpPageComponent {
  register: Register =  {
    name: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    numDoc: '',
    birthDate: undefined,
    email: '',
    password: ''
  } 

  acceptPrivacyPolicy: boolean = false;
  acceptTermsAndConditions: boolean = false;
}
