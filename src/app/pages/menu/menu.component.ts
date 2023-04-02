import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  ident: number = 0;

  constructor(private ar: ActivatedRoute){};

  ngOnInit(){
    this.ar.params.subscribe((p: Params) => {
      this.ident = p["id"];
    });
    console.log(this.ident);
  }
}
