import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ContactoComponent } from './contacto/contacto.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experiencias', component: ExperienciasComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
