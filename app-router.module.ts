import { RegistrarAsistenciaComponent } from './asistencia/registrar-asistencia/registrar-asistencia.component';
import { ListaHorarioComponent } from './horario/lista-horario/lista-horario.component';
//Aquí se encuentran los redireccionamiento a las diferentes partes del sitio web

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaActaComponent } from './acta/lista-acta/lista-acta.component';

const routes: Routes = [
  //Si el usuario escribe un redireccionamiento que no existe se enviará a la página principal del sitio web
  {path: '', component:ListaActaComponent},
  {path: 'acta', component:ListaActaComponent},
  {path: 'acta/:id', component:ListaActaComponent},
  {path: 'horario', component:ListaHorarioComponent},
  {path: 'asistencia', component:RegistrarAsistenciaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
