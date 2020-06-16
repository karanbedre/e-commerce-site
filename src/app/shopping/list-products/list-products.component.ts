import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/utils/common/common-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {

    this.commonService.get().subscribe(res => {
      console.log(res);

    })
  }

}
