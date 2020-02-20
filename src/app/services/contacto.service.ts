import { Injectable } from '@angular/core';
import {ContactoForm} from '../models/contactoForm';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactoService {
  url: string;
  constructor( private http: HttpClient) {
    this.url = '/';
  }
  sendInfo(body: ContactoForm) {
    return this.http.post( this.url, body);
  }
}
