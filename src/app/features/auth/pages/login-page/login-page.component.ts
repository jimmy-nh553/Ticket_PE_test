import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Login } from '../../models/login.interface';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    RouterLink,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  login: Login = {
    email: '',
    password: ''
  }
}
