import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user-security-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './user-security-page.component.html',
  styleUrl: './user-security-page.component.css'
})
export class UserSecurityPageComponent {

  passwordChange: {currentPassword: string, newPassword: string, newPasswordConfirmation: string} = {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: ''
  }

  validateNewPassword() {
    return this.passwordChange.newPassword === this.passwordChange.newPasswordConfirmation;
  }

  /**
   Al eliminar tu cuenta:
    Se borrarán todos tus datos personales asociados.
    Perderás acceso a tus tickets, sin posibilidad de recuperación.
    No podrás volver a acceder con esta cuenta.
   */

}
