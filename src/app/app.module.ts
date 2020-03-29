import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { DatosComponent } from './components/datos/datos.component';
import { PagoComponent } from './components/pago/pago.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModeloComponent,
    DatosComponent,
    PagoComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
