import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../models/producto.model'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  total: number = 0;

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

  sumar_total(producto: any){
    console.log(producto);
    this.total += producto.precio * producto.cantidad;
    console.log(this.total);
    producto.cantidad = 0;
  }
}
