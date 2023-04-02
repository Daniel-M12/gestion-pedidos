import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: any = [];

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

}
