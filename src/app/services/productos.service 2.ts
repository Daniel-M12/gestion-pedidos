import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  total: number = 0;

  constructor(private readonly http: HttpClient) {}

  get_products(){
    return this.http.get('/api/products/GetProducts');
  }
  
  sumar_total(producto: Producto){
    console.log(producto);
    this.total += producto.precio * producto.cantidad;
    return this.total;
  }

  reiniciar_total(){
    this.total = 0;
  }

  buscarId(productos: Producto[], id: number): number{
    let idEncontrado = 0;
    productos.forEach((producto: Producto) => {
      if(producto.id == id){
        idEncontrado = producto.id;
      }
    })
    return idEncontrado;
  }

  productoPorID(productos: Producto[], id: number){
    for (let i = 0; i < productos.length; i++) {
      if(productos[i].id == this.buscarId(productos, productos[i].id)){
        return productos[i];
      }   
    }
    return null;
  }
}
