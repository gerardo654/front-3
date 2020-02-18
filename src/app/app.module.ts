import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// Servicios
import { ContactoService } from './services/contacto.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienciasComponent,
    ContactoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule
    ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
