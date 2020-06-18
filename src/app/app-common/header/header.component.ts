import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { CommonServiceService } from 'src/app/utils/common/common-service.service';
import { Router } from '@angular/router';
import { ShopList } from 'src/app/utils/model/shop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public shopList = [];
  @SessionStorage('cartList') public cart: any;
  @SessionStorage('cartCount') public cartCount: any;
  @SessionStorage('totalSum') public totalSum;
  constructor(private commonService: CommonServiceService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.commonService.get().subscribe(res => {
      res.data.forEach(ele => {
        this.shopList.push(new ShopList(ele))
      });
    }, err => {
      console.log(err);
    });
  }

  removeFromCart(item) {
    this.commonService.removeFromCart(item)
    this.commonService.setSessionStorage(item);
  }


  checkQuantity(event, item) {
    if (event.target.value == '') {
      event.target.value = 0;
    }
    let shopListArray = this.shopList.find(ele => ele.id == item.id);
    let index = this.cart.findIndex(ele => ele.id == item.id);
    if (parseInt(event.target.value) > parseInt(shopListArray.quantity)) {
      event.target.value = this.cart[index].count;
    } else {
      this.cart[index].quantity = shopListArray.quantity - event.target.value;
      this.cartCount = this.cartCount - this.cart[index].count;
      this.cart[index].count = parseInt(event.target.value);
      this.cartCount = this.cartCount + this.cart[index].count;
      this.cart[index].total = this.cart[index].count * this.cart[index].price;
      this.totalSum = 0;
      this.cart.forEach(element => {
        this.totalSum = this.totalSum + (element.price * element.count)
      });
      this.cart = this.cart;
      this.commonService.setSessionStorage(item);
    }
  }

  navigateToBasket() {
    this.router.navigateByUrl('/shop/basket')
  }
}
