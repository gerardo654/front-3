import { Component, OnInit } from '@angular/core';
// import { ContactoService } from '../services/contacto.service';
import { ContactoForm } from '../models/contactoForm';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  // providers: [ContactoService]
})
export class ContactoComponent implements OnInit {
  contactoModel = new ContactoForm();
  constructor( ) { }
  // constructor( private contactoService: ContactoService ) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    // this.getInfo(this.contactoModel, f);
  }
  // getInfo(info: ContactoForm, f: NgForm) {
  //   console.log(info);
  //   this.contactoService.sendInfo(info).subscribe(
  //     respuesta => {
  //       console.log(respuesta);
  //     },
  //     error => {
  //       console.log('error: ' + error);
  //     }
  //   );
  // }
}
