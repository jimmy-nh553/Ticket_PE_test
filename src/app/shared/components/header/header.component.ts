import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../../features/users/services/user/user.service';
import { Drawer, DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DrawerModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // page
  popOverVisibility: boolean = false;
  activeTab = 'Inicio';
  navigationItems: MenuItem[] | undefined;
  popOverItems: MenuItem[] | undefined;
  sideBarVisible: boolean = false;

  @ViewChild('drawer')
  drawer?: Drawer;

  // user
  userIsLogged: boolean = true;
  // user: User = {} as User;
    

  constructor(
    private _userService: UserService,
  ) {}

  ngOnInit(): void {
    this.navigationItems = [
      {
        label: 'Inicio',
        routerLink: '/'
      },
      {
        label: 'Premios',
        routerLink: '/premios'
      },
      {
        label: 'Ganadores',
        routerLink: '/ganadores'
      },
      {
        label: 'Preguntas frecuentes',
        routerLink: '/preguntas-frecuentes'
      }     
    ];

    this.popOverItems = [
      {
        label: 'Mi cuenta',
        icon: 'pi pi-user',
        routerLink: '/mi-cuenta'
      },
      {
        label: 'Historial',
        icon: 'pi pi-history',
        routerLink: '/mi-cuenta/historial'
      },
      {
        label: 'Ajustes',
        icon: 'pi pi-cog',
        routerLink: '/mi-cuenta/ajustes'
      },
      {
        label: 'Seguridad',
        icon: 'pi pi-shield',
        routerLink: '/mi-cuenta/seguridad'
      },
   
    ];

    this.getUserInfo();
  }

  getUserInfo() {
    this._userService.getUserInfo().subscribe();
  }

  get user() {
    return this._userService.userInfo;
  }


  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  getNavItemClass(item: string): string {
    const baseClass = 'relative px-2 py-2 text-sm font-medium transition-colors hover:text-red-500';
    const activeClass = this.activeTab === item ? 'text-red-500' : 'text-gray-700';
    return `${baseClass} ${activeClass}`;
  }

  getMobileNavItemClass(item: string): string {
    const baseClass = 'relative px-3 py-2 text-sm font-medium transition-colors hover:text-red-500';
    const activeClass = this.activeTab === item ? 'text-red-500' : 'text-gray-700';
    return `${baseClass} ${activeClass}`;
  }  

  changeUserPopOverVisibility() {
    this.popOverVisibility = !this.popOverVisibility;
  }

  logout(event: any) {
    console.warn('logout');
    
    this.popOverVisibility = false;

    if(this.sideBarVisible) {
      this.toggleMobileSideBar(event);
    }
  }

  toggleMobileSideBar(event: any) {
    this.sideBarVisible = !this.sideBarVisible;

    if(!this.sideBarVisible) this.closeSideBar(event);
  }

  closeSideBar(event: any) {
    if(this.drawer) {
      this.drawer.close(event);
    }
  }


}
