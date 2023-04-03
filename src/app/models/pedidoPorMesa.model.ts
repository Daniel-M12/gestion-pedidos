import { Producto } from "./producto.model";

export interface PedidoPorMesa{
    idMesa: number;
    pedido: Producto[];
}