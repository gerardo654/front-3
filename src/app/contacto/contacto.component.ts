import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( private contacto: ContactoService ) { }

  ngOnInit(): void {
  }
  guardar(){
    console.log("guardar")
  }
}
