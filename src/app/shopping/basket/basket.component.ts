import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { CommonServiceService } from 'src/app/utils/common/common-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ShopList } from 'src/app/utils/model/shop';
import { SuccessBoxComponent } from 'src/app/utils/components/success-box/success-box.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public shopList = [];
  @SessionStorage('cartList') public cart: any;
  @SessionStorage('cartCount') public cartCount: any;
  @SessionStorage('totalSum') public totalSum: any;
  constructor(private commonService: CommonServiceService,
    private dialog: MatDialog) { }

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

  removeFromitem(item) {
    this.commonService.removeFromCart(item);
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
    }
  }

  buy() {
    const dialogRef = this.dialog.open(SuccessBoxComponent, {
      panelClass: 'confirm-delete-dialog',
      backdropClass: 'confirm-delete-backdrop',
      data: {
        title: 'Order Confirmed',
        message: 'Thanks for shopping with us.'
      }
    });

    dialogRef.afterClosed().subscribe((status: Boolean) => {
      this.cart = [];
      this.cartCount = 0;
      this.totalSum = 0;
    });
  }
}
