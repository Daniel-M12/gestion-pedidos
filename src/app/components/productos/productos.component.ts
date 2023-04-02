import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../models/producto.model'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = []; //Del API

  pedidoItems: Producto[] = [];
  total: number = 0;

  @Output()
  pedido = new EventEmitter<Producto[]>();


  constructor(
    private readonly ps: ProductosService
  ){}
  
  obtener_productos(){
    this.ps.get_products().subscribe((rest: any) => {
      this.productos = rest.data;
      console.log(this.productos);
    });
  }
  
  ngOnInit(): void{
    this.obtener_productos();
  }

  calcular_total(){
    this.productos.forEach(producto => {
      if(producto.cantidad > 0){
        this.pedidoItems.push(producto);
        this.total = this.ps.sumar_total(producto);
      }
    })
    
    this.pedido.emit(this.pedidoItems);
    this.ps.reiniciar_total();
    this.pedidoItems = [];
  }

  limpiar(){
    this.ps.reiniciar_total();
    this.pedidoItems = [];
    this.total = 0;
    
    this.productos.forEach(producto => {
      if(producto.cantidad > 0){
        producto.cantidad = 0;
      }
    })   
  }
}
