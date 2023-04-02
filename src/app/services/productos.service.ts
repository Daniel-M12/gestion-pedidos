import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private readonly http: HttpClient) {}

  get_products(){
    return this.http.get('/api/products/GetProducts');
  }
  

}
