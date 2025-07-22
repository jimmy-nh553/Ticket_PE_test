import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderFooterContainerComponent } from '../../../../shared/components/header-footer-container/header-footer-container.component';
import { SelectButtonModule, SelectButtonOptionClickEvent } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user/user.service';
import { Department } from '../../../company/models/department.interface';
import { Province } from '../../../company/models/province.interface';
import { District } from '../../../company/models/district.interface';
import { Gender } from '../../../company/models/gender.interface';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuOption } from '../../../../shared/models/menu-option.interface';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-my-account-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderFooterContainerComponent,
    SelectButtonModule,
    RouterModule,
  ],
  templateUrl: './my-account-page.component.html',
  styleUrl: './my-account-page.component.css'
})
export class MyAccountPageComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  
  // menu tabs
  menuOptions: MenuOption[] = [];
  selectedTab: MenuOption = {
    label: 'Perfil', icon: 'pi pi-user', value: 'pefil', route: '/mi-cuenta'
  };

  // user
  userCopy: User = {} as User;

  // tickets
  ticketsPluralPipe = {
    '=0': 'tickets',
    '=1': 'ticket',
    'other': 'tickets',
  }

  // selects data
  genders: Gender[] = [];  
  departments: Department[] = [];  
  provinces: Province[] = [];  
  districts: District[] = [];

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.menuOptions = [
      { label: 'Perfil', icon: 'pi pi-user', value: 'pefil', route: '/mi-cuenta' },
      { label: 'Historial', icon: 'pi pi-history', value: 'historial', route: '/mi-cuenta/historial' },
      { label: 'Ajustes', icon: 'pi pi-cog', value: 'ajustes', route: '/mi-cuenta/ajustes' },
      { label: 'Seguridad', icon: 'pi pi-shield', value: 'seguridad', route: '/mi-cuenta/seguridad' },
    ];
    const currentUrl = this._router.url; 
    this.selectedTab = this.menuOptions.find(item => currentUrl === item.route) || this.menuOptions[0];  

    this.listenToUrlChanges();
    this.getUserInfo();    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getUserInfo() {    
    this._userService.getUserInfo().subscribe(resp => {
      this.userCopy = {...resp};
    });
  }

  listenToUrlChanges() {    
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.selectedTab = this.menuOptions.find(item => event.urlAfterRedirects === item.route) || this.menuOptions[0];
      }); 
  }

  get user() {   
    return this._userService.userInfo;
  }

  itemClick(event: SelectButtonOptionClickEvent) {
    this._router.navigateByUrl(event.option.route);
  }

}
