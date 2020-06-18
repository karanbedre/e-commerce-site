import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { SessionStorage } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  public storage = new Subject<any>();
  @SessionStorage('cartList') public cart: any;
  @SessionStorage('cartCount') public cartCount: any;
  @SessionStorage('totalSum') public totalSum;
  constructor(private httpService: HttpServiceService, private errService: ErrorService) { }

  /**
   * @method - get() : to fetch data  from server
   */
  get(): Observable<any> {
    return this.httpService.get()
      .pipe(
        map((res: Response) => {
          return res.json()
        }),
        catchError(error => {
          this.errorHandler(error);
          return throwError(error.json())
        })
      );
  }

  /**
   * @method removeFromCart() - common method and used in both header and basket component
   * @param item - object which to remove
   */
  removeFromCart(item) {
    this.cart.forEach((ele, index) => {
      if (ele.id == item.id) {
        ele.quantity = ele.quantity + ele.count;
        this.cartCount = this.cartCount - ele.count;
        ele.count = 0;
        this.cart.splice(index, 1)
      }
    });
    this.totalSum = this.totalSum - item.total;
    this.cartCount = this.cartCount;
    this.cart = this.cart;
  }

  /**
   * @method setSessionStorage() : to emit value
   * @param message - a object, which is modifed
   */
  setSessionStorage(message: any) {
    this.storage.next(message);
  }
  /**
   * @method getSessionStorage() : to send the value when it is subscribed
   */
  getSessionStorage(): Observable<any> {
    return this.storage.asObservable();
  }

  /* error handler */
  errorHandler(error: any) {
    this.errService.handleError(error);
  }

}
