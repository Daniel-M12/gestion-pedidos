import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Producto } from 'src/app/models/producto.model';
import { PedidoPorMesa } from 'src/app/models/pedidoPorMesa.model';
import { MenuServiceService } from 'src/app/services/menu-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  total = 0;

  pedidoPorMesa: PedidoPorMesa = {
    idMesa: 0,
    pedido: [],
    atendido: false
  };

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private ms: MenuServiceService
    ){};

  ngOnInit(){
    this.ar.params.subscribe((p: Params) => {
      this.pedidoPorMesa.idMesa = p["id"];
    });
    console.log(this.pedidoPorMesa.idMesa);
  }

  obtenerProductos(pedido: Producto[]){
    this.pedidoPorMesa.pedido = pedido;
    console.log("Pedido Por Mesa: " + this.pedidoPorMesa)
  }

  realizarPedido(){
    console.log("Realizar Pedido - Pedido de pedido por mesa: " + this.pedidoPorMesa.pedido);
    this.ms.setPedido(this.pedidoPorMesa);
    this.router.navigate(['pedidos']);
  }
}
