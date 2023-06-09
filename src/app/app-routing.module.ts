import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'mesas', component: MesasComponent},
  {path:'productos', component: ProductosComponent},
  {path:'pedidos', component: PedidoComponent},
  {path:'mesas/:id/menu', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
