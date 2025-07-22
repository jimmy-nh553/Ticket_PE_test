import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Toast } from 'primeng/toast';
import { catchError, EMPTY } from 'rxjs';
import { LoginWorkers } from '../../models/login-workers.interface';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    Toast,
    InputTextModule,
    RouterModule,
  ],
  providers: [MessageService],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.css'
})
export class AdminLoginPageComponent {

  user: LoginWorkers = {
    username: '',
    password: '',
  }
  loginLoading = false;

  constructor(
    private messageServ: MessageService, 
    private _authServ: AuthService, 
    private _router: Router
  ) { }

  validateForm() {
    this.user.username = this.user.username.trim();
    this.user.password = this.user.password.trim();

    if (this.user.username.length === 0 || this.user.password.length === 0) {
      this.messageServ.add({
        severity: 'error',
        summary: 'Campos vacíos.',
        detail: 'Por favor, ingrese sus credenciales.',
        key: 'toast-login',
        life: 3500
      });
      return false;
    }
    return true;
  }

  login() {
    if (!this.validateForm()) return;

    this.loginLoading = true;

    // this._authServ.workersLogin(this.user).pipe(
    //   catchError((err) => {
    //     if (err.status === 401) {
    //       this.messageServ.add({
    //         severity: 'error',
    //         summary: 'Credenciales incorrectas.',
    //         detail: 'El usuario y/o la contraseña son incorrectos.',
    //         key: 'toast-login',
    //         life: 3500
    //       });

    //       this.user.password = '';
    //     } else {
    //       this.messageServ.add({
    //         severity: 'error',
    //         summary: 'Error al iniciar sesión.',
    //         detail: 'Se produjo un error al intentar iniciar sesión.',
    //         key: 'toast-login',
    //         sticky: true
    //       });

    //       this.user = {
    //         username: '',
    //         password: '',
    //       }
    //     }
    //     console.error(err);
    //     this.loginLoading = false;
    //     return EMPTY;
    //   })
    // ).subscribe(response => {
    //   if (response.status === 200) {
    //     this.messageServ.add({
    //       severity: 'success',
    //       summary: 'Inicio de sesión exitoso.',
    //       detail: `Bienvenido al sistema ${response.body}`,
    //       key: 'toast-login',
    //       life: 5000
    //     });

    //     setTimeout(() => {
    //       this._router.navigate(['/dashboard']);
    //       this.loginLoading = false;
    //     }, 1200)
    //   }
    // });

    this.messageServ.add({
      severity: 'success',
      summary: 'Inicio de sesión exitoso',
      detail: 'Bienvenido',
      key: 'toast-login',
      life: 5000
    });

    setTimeout(() => {
      this._router.navigate(['/admin/dashboard']);
      this.loginLoading = false;
    }, 1200)

  }
  
}
