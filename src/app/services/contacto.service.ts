import { Injectable } from '@angular/core';

export interface Contacto {
  nombre: string;
}

@Injectable()
export class ContactoService {
  constructor() {
    console.log('servicio');
  }
}
