function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-shopping-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/basket/basket.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/basket/basket.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingBasketBasketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"basket\">\n    <div class=\"col-md-12 breadcrumbs\">\n        <h3 [routerLink]=\"['/shop']\" routerLinkActive=\"router-link-active\">Shop <span> <img\n                    src=\"../../../assets/img/right-arrow.png\" alt=\"\"> </span></h3>\n        <h3 class=\"ml-10\">Basket</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let item of cart; let i=index;\">\n            <div class=\"basket-item\">\n                <div class=\"basket-name text-capitalize\">{{item.name}}</div>\n                <div class=\"basket-name float-right\">{{item.price}} / item </div>\n                <div class=\"n-date\">\n                    <label for=\"{{item.id}}\">Quanity: </label>\n                    <input type=\"text\" name=\"{{item.id}}\" id=\"{{item.id}}\" value=\"{{item.count}}\"\n                        [appNumber]=\"{'only-numbers': true}\" (keyup)=\"checkQuantity($event, item)\">\n                </div>\n                <div class=\"basket-name\">sub-total: &#8377;{{item.total}}</div>\n                <div class=\"basket-name float-right\"><button (click)=\"removeFromitem(item)\">Remove\n                        from Cart</button></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row total\" *ngIf=\"cart.length > 0\">\n        <div class=\"basket-name text-capitalize col-md-2\"> Total Items: {{cartCount}}</div>\n        <div class=\"basket-name float-right\">Total Price:\n            &#8377;{{totalSum}}</div>\n    </div>\n\n    <div class=\"row total\" *ngIf=\"cart.length > 0\">\n        <button (click)=\"buy()\">Buy</button>\n    </div>\n    <div class=\"text-center\" *ngIf=\"cart.length == 0\">\n        No Items added\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/list-products/list-products.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/list-products/list-products.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingListProductsListProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row products\">\n    <div class=\"col-md-12\">\n        <h2>Products</h2>\n    </div>\n    <div class=\"col-md-3\" *ngFor=\"let item of shopList\">\n        <div class=\"product-list\">\n            <div> <img src=\"{{item.img}}\" alt=\"\"></div>\n            <div>Product: {{item.name}}</div>\n            <div>Price: &#8377;{{item.price}}</div>\n            <div>Quanity: {{item.quantity}}</div>\n            <div><button [disabled]=\"item.quantity == 0\" (click)=\"addToCart(item)\">Add to Cart</button></div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/shopping/basket/basket.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shopping/basket/basket.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingBasketBasketComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".basket {\n  padding: 20px 40px;\n}\n.basket .breadcrumbs {\n  display: flex;\n}\n.basket .breadcrumbs img {\n  width: 14%;\n}\n.basket .breadcrumbs .ml-10 {\n  margin-left: 10px;\n}\n.basket .breadcrumbs + h2 {\n  cursor: pointer;\n}\n.basket .basket-item {\n  width: 89%;\n  background-color: white;\n  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.35);\n  height: 134px;\n  padding: 10px;\n  margin-top: 10px;\n}\n.basket .basket-item .basket-name {\n  display: inline;\n}\n.basket .total {\n  margin-top: 30px;\n  border-top: 1px solid black;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcmFuL0RvY3VtZW50cy9lLWNvbW1lcmNlL3NyYy9hcHAvc2hvcHBpbmcvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcHBpbmcvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7QUNDUjtBREFRO0VBQ0ksVUFBQTtBQ0VaO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0FDQVo7QURHSTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmcvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNrZXQge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcblxuICAgIC5icmVhZGNydW1icyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTQlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1sLTEwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5icmVhZGNydW1icyArIGgyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuYmFza2V0LWl0ZW0ge1xuICAgICAgICB3aWR0aDogODklO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgICAgIGhlaWdodDogMTM0cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgLmJhc2tldC1uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudG90YWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbn1cbiIsIi5iYXNrZXQge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG59XG4uYmFza2V0IC5icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYmFza2V0IC5icmVhZGNydW1icyBpbWcge1xuICB3aWR0aDogMTQlO1xufVxuLmJhc2tldCAuYnJlYWRjcnVtYnMgLm1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYmFza2V0IC5icmVhZGNydW1icyArIGgyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJhc2tldCAuYmFza2V0LWl0ZW0ge1xuICB3aWR0aDogODklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGhlaWdodDogMTM0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYmFza2V0IC5iYXNrZXQtaXRlbSAuYmFza2V0LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uYmFza2V0IC50b3RhbCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shopping/basket/basket.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shopping/basket/basket.component.ts ***!
    \*****************************************************/

  /*! exports provided: BasketComponent */

  /***/
  function srcAppShoppingBasketBasketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketComponent", function () {
      return BasketComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var src_app_utils_common_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils/common/common-service.service */
    "./src/app/utils/common/common-service.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_app_utils_model_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/utils/model/shop */
    "./src/app/utils/model/shop.ts");
    /* harmony import */


    var src_app_utils_components_success_box_success_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/utils/components/success-box/success-box.component */
    "./src/app/utils/components/success-box/success-box.component.ts");

    var BasketComponent = /*#__PURE__*/function () {
      function BasketComponent(commonService, dialog) {
        _classCallCheck(this, BasketComponent);

        this.commonService = commonService;
        this.dialog = dialog;
        this.shopList = [];
      }

      _createClass(BasketComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.commonService.get().subscribe(function (res) {
            res.data.forEach(function (ele) {
              _this.shopList.push(new src_app_utils_model_shop__WEBPACK_IMPORTED_MODULE_5__["ShopList"](ele));
            });
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "removeFromitem",
        value: function removeFromitem(item) {
          this.commonService.removeFromCart(item);
        }
      }, {
        key: "checkQuantity",
        value: function checkQuantity(event, item) {
          var _this2 = this;

          if (event.target.value == '') {
            event.target.value = 0;
          }

          var shopListArray = this.shopList.find(function (ele) {
            return ele.id == item.id;
          });
          var index = this.cart.findIndex(function (ele) {
            return ele.id == item.id;
          });

          if (parseInt(event.target.value) > parseInt(shopListArray.quantity)) {
            event.target.value = this.cart[index].count;
          } else {
            this.cart[index].quantity = shopListArray.quantity - event.target.value;
            this.cartCount = this.cartCount - this.cart[index].count;
            this.cart[index].count = parseInt(event.target.value);
            this.cartCount = this.cartCount + this.cart[index].count;
            this.cart[index].total = this.cart[index].count * this.cart[index].price;
            this.totalSum = 0;
            this.cart.forEach(function (element) {
              _this2.totalSum = _this2.totalSum + element.price * element.count;
            });
            this.cart = this.cart;
          }
        }
      }, {
        key: "buy",
        value: function buy() {
          var _this3 = this;

          var dialogRef = this.dialog.open(src_app_utils_components_success_box_success_box_component__WEBPACK_IMPORTED_MODULE_6__["SuccessBoxComponent"], {
            panelClass: 'confirm-delete-dialog',
            backdropClass: 'confirm-delete-backdrop',
            data: {
              title: 'Order Confirmed',
              message: 'Thanks for shopping with us.'
            }
          });
          dialogRef.afterClosed().subscribe(function (status) {
            _this3.cart = [];
            _this3.cartCount = 0;
            _this3.totalSum = 0;
          });
        }
      }]);

      return BasketComponent;
    }();

    BasketComponent.ctorParameters = function () {
      return [{
        type: src_app_utils_common_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorage"])('cartList')], BasketComponent.prototype, "cart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorage"])('cartCount')], BasketComponent.prototype, "cartCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorage"])('totalSum')], BasketComponent.prototype, "totalSum", void 0);
    BasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basket',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basket.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/basket/basket.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basket.component.scss */
      "./src/app/shopping/basket/basket.component.scss"))["default"]]
    })], BasketComponent);
    /***/
  },

  /***/
  "./src/app/shopping/list-products/list-products.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/shopping/list-products/list-products.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingListProductsListProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".products {\n  padding: 20px 40px;\n}\n.products .product-list {\n  width: 67%;\n  background-color: white;\n  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.35);\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding: 10px;\n  margin-top: 10px;\n}\n.products .product-list img,\n.products .product-list button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thcmFuL0RvY3VtZW50cy9lLWNvbW1lcmNlL3NyYy9hcHAvc2hvcHBpbmcvbGlzdC1wcm9kdWN0cy9saXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaG9wcGluZy9saXN0LXByb2R1Y3RzL2xpc3QtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0VSO0FERFE7O0VBRUksV0FBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmcvbGlzdC1wcm9kdWN0cy9saXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgLnByb2R1Y3QtbGlzdCB7XG4gICAgICAgIHdpZHRoOiA2NyU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgaW1nLFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucHJvZHVjdHMge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG59XG4ucHJvZHVjdHMgLnByb2R1Y3QtbGlzdCB7XG4gIHdpZHRoOiA2NyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdC1saXN0IGltZyxcbi5wcm9kdWN0cyAucHJvZHVjdC1saXN0IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shopping/list-products/list-products.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shopping/list-products/list-products.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ListProductsComponent */

  /***/
  function srcAppShoppingListProductsListProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function () {
      return ListProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_common_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utils/common/common-service.service */
    "./src/app/utils/common/common-service.service.ts");
    /* harmony import */


    var src_app_utils_model_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils/model/shop */
    "./src/app/utils/model/shop.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");

    var ListProductsComponent = /*#__PURE__*/function () {
      function ListProductsComponent(commonService) {
        _classCallCheck(this, ListProductsComponent);

        this.commonService = commonService;
        this.shopList = [];
      }

      _createClass(ListProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.commonService.getSessionStorage().subscribe(function (res) {
            _this4.shopList.map(function (ele) {
              if (ele.id == res.id) {
                ele.quantity = res.quantity;
              }
            });
          });
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this5 = this;

          this.commonService.get().subscribe(function (res) {
            res.data.forEach(function (ele) {
              _this5.shopList.push(new src_app_utils_model_shop__WEBPACK_IMPORTED_MODULE_3__["ShopList"](ele));
            });
            _this5.cart = _this5.cart != null ? _this5.cart : [];
            _this5.cartCount = _this5.cartCount != null ? _this5.cartCount : 0;
            _this5.totalSum = _this5.totalSum != null ? _this5.totalSum : 0;

            _this5.updateShopList();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updateShopList",
        value: function updateShopList() {
          var _this6 = this;

          if (this.cart.length > 0) {
            this.shopList.forEach(function (ele) {
              _this6.cart.forEach(function (res) {
                if (ele.id == res.id) {
                  ele.quantity = res.quantity;
                }
              });
            });
          }
        }
      }, {
        key: "addToCart",
        value: function addToCart(itemData) {
          var _this7 = this;

          var storeData = _toConsumableArray(this.cart);

          storeData = storeData.filter(function (ele) {
            return ele.id == itemData.id;
          });

          if (storeData.length == 0) {
            itemData.quantity--;
            itemData['count'] = 1;
            itemData['total'] = parseInt(itemData.price);
            this.cart.push(itemData);
          } else {
            this.cart.forEach(function (element) {
              if (element.id == storeData[0].id) {
                element.count++;
                itemData.quantity--;
                element.total += parseInt(storeData[0].price);
              }
            });
          }

          this.totalSum = 0;
          this.cart.forEach(function (element) {
            _this7.totalSum = _this7.totalSum + element.price * element.count;
          });
          this.totalSum = this.totalSum;
          this.cart = this.cart;
          this.cartCount++;
          this.cartCount = this.cartCount;
        }
      }]);

      return ListProductsComponent;
    }();

    ListProductsComponent.ctorParameters = function () {
      return [{
        type: src_app_utils_common_common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorage"])('cartList')], ListProductsComponent.prototype, "cart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorage"])('cartCount')], ListProductsComponent.prototype, "cartCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorage"])('totalSum')], ListProductsComponent.prototype, "totalSum", void 0);
    ListProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/list-products/list-products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-products.component.scss */
      "./src/app/shopping/list-products/list-products.component.scss"))["default"]]
    })], ListProductsComponent);
    /***/
  },

  /***/
  "./src/app/shopping/shopping-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shopping/shopping-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ShoppingRoutingModule */

  /***/
  function srcAppShoppingShoppingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingRoutingModule", function () {
      return ShoppingRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-products/list-products.component */
    "./src/app/shopping/list-products/list-products.component.ts");
    /* harmony import */


    var _basket_basket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basket/basket.component */
    "./src/app/shopping/basket/basket.component.ts");

    var routes = [{
      path: '',
      component: _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_3__["ListProductsComponent"]
    }, {
      path: 'basket',
      component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_4__["BasketComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var ShoppingRoutingModule = function ShoppingRoutingModule() {
      _classCallCheck(this, ShoppingRoutingModule);
    };

    ShoppingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShoppingRoutingModule);
    /***/
  },

  /***/
  "./src/app/shopping/shopping.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/shopping/shopping.module.ts ***!
    \*********************************************/

  /*! exports provided: ShoppingModule */

  /***/
  function srcAppShoppingShoppingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingModule", function () {
      return ShoppingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shopping_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shopping-routing.module */
    "./src/app/shopping/shopping-routing.module.ts");
    /* harmony import */


    var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-products/list-products.component */
    "./src/app/shopping/list-products/list-products.component.ts");
    /* harmony import */


    var _basket_basket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basket/basket.component */
    "./src/app/shopping/basket/basket.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app-common/app-common.module */
    "./src/app/app-common/app-common.module.ts");

    var ShoppingModule = function ShoppingModule() {
      _classCallCheck(this, ShoppingModule);
    };

    ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_4__["ListProductsComponent"], _basket_basket_component__WEBPACK_IMPORTED_MODULE_5__["BasketComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shopping_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShoppingRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"]]
    })], ShoppingModule);
    /***/
  }
}]);
//# sourceMappingURL=shopping-shopping-module-es5.js.map