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

  }

  mostrarEnTabla(){
    const pedidoGuardadoStr = localStorage.getItem('pedidoPorMesa');
    
    this.ms.pedidoMesaObs$.subscribe(data => {
      this.listaPedidosPorMesa.push(data);
      localStorage.setItem('pedidoPorMesa', JSON.stringify(this.listaPedidosPorMesa));
    });

    if (pedidoGuardadoStr) {
      this.listaPedidosPorMesa = JSON.parse(pedidoGuardadoStr);
    }
  }

  /*
  limpiarTabla(){
    this.borrarAtendidos();
  }

  borrarCero(){
    const pedidoGuardadoStr = localStorage.getItem('pedidoPorMesa');
    if (pedidoGuardadoStr) {
      this.listaPedidosPorMesa = JSON.parse(pedidoGuardadoStr);
    }

    let objetoAEliminar = this.listaPedidosPorMesa.find((pedidoMesa) => pedidoMesa.idMesa === 0);

    if (objetoAEliminar) {
      this.listaPedidosPorMesa = this.listaPedidosPorMesa.filter((pedidoMesa) => pedidoMesa.idMesa !== 0);
      localStorage.setItem('nombreListaObjetos', JSON.stringify(this.listaPedidosPorMesa));
    }
  }

  borrarAtendidos(){
    const pedidoGuardadoStr = localStorage.getItem('pedidoPorMesa');
    if (pedidoGuardadoStr) {
      this.listaPedidosPorMesa = JSON.parse(pedidoGuardadoStr);
    }

    let objetoAEliminar = this.listaPedidosPorMesa.find((pedidoMesa) => this.verificarAtencion(pedidoMesa));

    if (objetoAEliminar) {
      this.listaPedidosPorMesa = this.listaPedidosPorMesa.filter((objeto) => objeto.idMesa !== 0);
      localStorage.setItem('nombreListaObjetos', JSON.stringify(this.listaPedidosPorMesa));
    }
  }

  verificarAtencion(pedidoMesa: PedidoPorMesa): Boolean{
    let atendido = true;
    pedidoMesa.pedido.forEach(plato => {
      if(!plato.atendido){
        atendido = false;
      }
    })
    return atendido;
  }*/
}
