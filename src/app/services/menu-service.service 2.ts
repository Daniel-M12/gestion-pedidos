import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PedidoPorMesa } from '../models/pedidoPorMesa.model';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private pedidoMesaBehavior = new BehaviorSubject<PedidoPorMesa>({
    idMesa: 0,
    pedido: [],
    atendido: false
  });

  public readonly pedidoMesaObs$ = this.pedidoMesaBehavior.asObservable();

  constructor() { }

  setPedido(pedidoPorMesa: PedidoPorMesa){
    this.pedidoMesaBehavior.next(pedidoPorMesa);
  }
}
