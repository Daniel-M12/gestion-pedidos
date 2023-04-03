import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MesasServiceService } from 'src/app/services/mesas-service.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent {
  mesas: any = [];
  
  constructor(private readonly mesasService: MesasServiceService){}

  obtener_mesas(){
    this.mesas = this.mesasService.obtener_mesas();
  }

  ngOnInit(){
    this.obtener_mesas();
  }
}
