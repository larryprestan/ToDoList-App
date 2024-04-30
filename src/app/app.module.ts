import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuProyectosComponent } from './menu-proyectos/menu-proyectos.component';
import { InicioproyectoComponent } from './inicioproyecto/inicioproyecto.component';
import { NuevoproyectoComponent } from './nuevoproyecto/nuevoproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuProyectosComponent,
    InicioproyectoComponent,
    NuevoproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
