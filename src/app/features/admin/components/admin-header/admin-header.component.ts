import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../users/services/user/user.service';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { catchError, EMPTY } from 'rxjs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'admin-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DrawerModule,
    ButtonModule,
  ],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  visible: boolean = false;  

  @ViewChild('drawer')
  drawer?: Drawer;

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _router: Router,
  ) {}

  logout(event: any) {
    // this._sharedService.emitLoadingValue(true);
    // this._authService.logout()
    //   .pipe(
    //     catchError((err) => {
    //       console.error('Error al cerrar sesión:', err);
    //       this._router.navigateByUrl('/'); // Si hay error, redirige inmediatamente
    //       // this._sharedService.emitLoadingValue(false);
    //       return EMPTY;
    //     })
    //   )
    //   .subscribe(response => {
    //     if(this.drawer) { this.drawer.close(event) }
    //     this.messageServ.add({
    //       severity: 'info',
    //       summary: 'Sesión cerrada.',
    //       detail: `Su sesión fue cerrada correctamente`,
    //       key: 'toast-navbar',
    //       life: 2500
    //     });
    //     this._userService.removeUserInfo();

    //     setTimeout(() => {
    //       this._sharedService.emitLoadingValue(false);
    //       this._router.navigateByUrl('/');
    //       this._cartService.clearCart;
    //     }, 1500)

    //   });


    // this.messageServ.add({
    //   severity: 'info',
    //   summary: 'Cesión cerrada.',
    //   detail: 'Su sesión fue cerrada correctamente.',
    //   key: 'toast-sidebar',
    //   life: 2500
    // });
    this.visible = false;

    setTimeout(()=> {
      this._router.navigateByUrl('/admin-login');
    }, 1500)
  }
  

  closeSideBar(event: any) {  
    this.visible = false;

    if(this.drawer) {
      this.drawer.close(event);
    }
  }

}
