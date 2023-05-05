import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesasServiceService {
  mesas = [
    {
      id: 1,
      nombre: 'Mesa 1'
    }
  ];

  agregar_mesas(n: number){
    for (let i = 2; i <= n; i++) {
      let mesa = {
        id: i,
        nombre: 'Mesa ' + i
      }
      this.mesas.push(mesa);
    }
  }

  constructor() {
    this.agregar_mesas(10);
  }

  obtener_mesas(){
    return this.mesas;
  }
}
