import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MesasComponent,
    ProductosComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
