import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(
    private fb: FormBuilder,
    private readonly ps: ProductosService
  ){}

  productosForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: [0.0, Validators.required],
    imagen: ['', Validators.required],
    categoria: [0, Validators.required],
    descripcion: ''
  });

  agregarProducto(producto: any){
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    this.ps.insert_product(producto, header).subscribe((rest:any)=>{
      if(rest.isSuccess){
        console.log(rest);
        alert('Producto creado con ID: ' + rest.data.id);
        
      }else{
        alert(rest.errorMessage)
      }
    })
  }

  onSubmit(){
    if(this.productosForm.valid){
      console.log(this.productosForm.value);
      this.agregarProducto(this.productosForm.value);
    }
  }
}
