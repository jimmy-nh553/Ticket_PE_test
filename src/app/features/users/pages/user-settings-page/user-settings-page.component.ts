import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-user-settings-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToggleSwitchModule,
  ],
  templateUrl: './user-settings-page.component.html',
  styleUrl: './user-settings-page.component.css'
})
export class UserSettingsPageComponent {

  settings: {label: string, config: boolean, icon: string}[] = [
    {
      label: 'Notificaciones por email',
      config: true,
      icon: 'pi pi-envelope', 
    },
    {
      label: 'Notificaciones SMS',
      config: true,
      icon: 'pi pi-phone', 
    },
    {
      label: 'Notificaciones push',
      config: false,
      icon: 'pi pi-bell', 
    },
    {
      label: 'Ofertas y promociones',
      config: true,
      icon: 'pi pi-credit-card', 
    },
  ]
}
