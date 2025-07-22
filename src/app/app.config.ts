import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { MyPreset } from '../mypreset';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes,
      withViewTransitions(),
    ), 
    provideAnimationsAsync(), 
    provideHttpClient(withFetch()), 
    providePrimeNG({
    theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: false,
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities'
        }
      }
    },
    translation: {
      startsWith: 'Inicia con',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Termina con',
      equals: 'Igual a',
      notEquals: 'Diferente a',
      noFilter: 'Sin filtro',
      matchAll: 'Coincidir todo',
      matchAny: 'Coincidir cualquiera',
      dateIs: 'La fecha es igual',
      dateIsNot: 'La fecha es diferente',
      dateBefore: 'La fecha es anterior',
      dateAfter: 'La fecha es posterior',
      lt: 'Menor a',
      lte: 'Menor o igual a',
      gt: 'Mayor a',
      gte: 'Mayor o igual a',
      addRule: 'Nuevo filtro',
      removeRule: 'Remover filtro',
      clear: 'Borrar',
      apply: 'Aplicar',
      emptySelectionMessage: 'No se encontraron resultados',
      emptyFilterMessage: 'No se encontraron resultados',
      emptySearchMessage: 'No se encontraron resultados',
      emptyMessage: 'No se encontraron resultados',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      dayNamesMin: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      today: 'Hoy',
    }
  })]
};
