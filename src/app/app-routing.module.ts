import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuProyectosComponent } from './menu-proyectos/menu-proyectos.component';
import { InicioproyectoComponent } from './inicioproyecto/inicioproyecto.component';
import { NuevoproyectoComponent } from './nuevoproyecto/nuevoproyecto.component';

const routes: Routes = [
  {path:'menuproyecto',component:MenuProyectosComponent},
  {path:'',component:InicioproyectoComponent},
  {path:'nuevoproyecto',component:NuevoproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
