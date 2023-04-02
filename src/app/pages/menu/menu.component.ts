import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  idMesa: number = 0;
  total = 0;
  pedido: Producto[] = [];

  constructor(
    private ar: ActivatedRoute,
    private router: Router
    ){};

  ngOnInit(){
    this.ar.params.subscribe((p: Params) => {
      this.idMesa = p["id"];
    });
    console.log(this.idMesa);
  }

  obtenerProductos(pedido: Producto[]){
    this.pedido = pedido;
  }

  realizarPedido(){
    console.log(this.pedido);
    this.router.navigate(['pedidos']);
  }
}
