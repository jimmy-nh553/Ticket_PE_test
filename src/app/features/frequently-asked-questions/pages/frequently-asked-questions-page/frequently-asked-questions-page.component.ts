import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderFooterContainerComponent } from '../../../../shared/components/header-footer-container/header-footer-container.component';
import Faq from '../../models/faq.interface';

@Component({
  selector: 'app-frequently-asked-questions-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderFooterContainerComponent,
  ],
  templateUrl: './frequently-asked-questions-page.component.html',
  styleUrl: './frequently-asked-questions-page.component.css'
})
export class FrequentlyAskedQuestionsPageComponent implements OnInit {  

  faqList: Faq[] = [];
  faqCategories: string[] = [];

  openFaqId: string = '';

  ngOnInit(): void {
    this.faqList = [
      {
        id: 'faq-100',
        category: 'Métodos de pago',
        title: 'Métodos de pago 1 dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-101',
        category: 'Métodos de pago',
        title: 'Métodos de pago 2 dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-102',
        category: 'Premios',
        title: 'Premios 1, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-103',
        category: 'Premios',
        title: 'Premios 2, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-104',
        category: 'Entregas',
        title: 'Entregas 1, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-105',
        category: 'Entregas',
        title: 'Entregas 2, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-106',
        category: 'Seguridad',
        title: 'Seguridad 1, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-107',
        category: 'Seguridad',
        title: 'Seguridad 2, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-108',
        category: 'Cuenta',
        title: 'Cuenta 1, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
      {
        id: 'faq-109',
        category: 'Cuenta',
        title: 'Cuenta 2, ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam adipisci omnis sequi deleniti dolores id, mollitia, hic nam ipsum repudiandae soluta consectetur animi provident, incidunt tenetur culpa saepe! Deserunt.',
      },
    ];

    this.getCategories();
  }

  getCategories() {
    this.faqList.forEach(faq => {
      if(!this.faqCategories.includes(faq.category)) {
        this.faqCategories.push(faq.category);
      }
    });
  }

  getFaqByCategory(category: string) {
    return this.faqList.filter(faq => faq.category === category);
  }

  toggleFaqVisibility(faqId: string) {
    this.openFaqId = this.openFaqId === faqId ? '' : faqId;
  }

}
