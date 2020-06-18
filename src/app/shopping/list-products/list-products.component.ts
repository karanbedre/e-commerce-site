import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/utils/common/common-service.service';
import { ShopList } from 'src/app/utils/model/shop';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  public shopList = [];
  @SessionStorage('cartList') public cart: any;
  @SessionStorage('cartCount') public cartCount: any;
  @SessionStorage('totalSum') public totalSum: any;


  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
    this.commonService.getSessionStorage().subscribe(res => {
      this.shopList.map(ele => {
        if (ele.id == res.id) {
          ele.quantity = res.quantity;
        }
      })
    });
    this.getData();
  }

  getData() {
    this.commonService.get().subscribe(res => {
      res.data.forEach(ele => {
        this.shopList.push(new ShopList(ele))
      });
      this.cart = this.cart != null ? this.cart : [];
      this.cartCount = this.cartCount != null ? this.cartCount : 0;
      this.totalSum = this.totalSum != null ? this.totalSum : 0
      this.updateShopList();
    }, err => {
      console.log(err);
    });
  }

  updateShopList() {
    if (this.cart.length > 0) {
      this.shopList.forEach(ele => {
        this.cart.forEach(res => {
          if (ele.id == res.id) {
            ele.quantity = res.quantity;
          }
        })
      });
    }
  }

  addToCart(itemData) {
    let storeData = [...this.cart];
    storeData = storeData.filter(ele => ele.id == itemData.id);
    if (storeData.length == 0) {
      itemData.quantity--;
      itemData['count'] = 1;
      itemData['total'] = parseInt(itemData.price);
      this.cart.push(itemData);
    } else {
      this.cart.forEach((element) => {
        if (element.id == storeData[0].id) {
          element.count++;
          itemData.quantity--;
          element.total += parseInt(storeData[0].price);
        }
      });
    }
    this.totalSum = 0;
    this.cart.forEach(element => {
      this.totalSum = this.totalSum + (element.price * element.count)
    });
    this.totalSum = this.totalSum;
    this.cart = this.cart;
    this.cartCount++;
    this.cartCount = this.cartCount;
  }
}
