import { Component, OnInit } from '@angular/core';

import { PedidoPorMesa } from 'src/app/models/pedidoPorMesa.model';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  listaPedidosPorMesa: PedidoPorMesa[] = [];

  constructor(
    private ms: MenuServiceService
  ){}

  ngOnInit(): void {
    this.ms.pedidoMesaObs$.subscribe(data => {
      this.listaPedidosPorMesa.push(data);
      console.log("Datos del observable: " + data.idMesa + " - " + data.pedido[0]);
    });
  }

  verPedidos(){
    console.log("Pedidos: " + this.listaPedidosPorMesa);
  }
}
