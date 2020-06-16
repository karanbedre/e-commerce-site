import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public allcarts = [];
  @SessionStorage('cartList') public cart: any;
  @SessionStorage('cartCount') public cartCount: any;
  constructor() { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.allcarts = this.cart;
    console.log(this.cart, this.cartCount);
  }
}
