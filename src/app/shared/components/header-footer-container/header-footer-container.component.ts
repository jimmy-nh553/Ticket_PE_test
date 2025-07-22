import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'shared-header-footer-container',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './header-footer-container.component.html',
  styleUrl: './header-footer-container.component.css'
})
export class HeaderFooterContainerComponent {

}
