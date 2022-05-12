import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  titleComponent : string = " Product components"
  isStatus: boolean = false
  ProductName: string = ""
  productsList: IProduct[] = [
    {id: 1, name: "products a", price: 200, status: false},
    {id: 2, name: "products b", price: 200, status: true}

  ]
  constructor() { }
  ngOnInit(): void {
  }

  onHandleClick() {
    // this.isStatus = true
    this.isStatus = !this.isStatus

  }
  onHandleDelete(id : number) {
    this.productsList = this.productsList.filter(product => product.id !== id)
  }
  onHandleChange(event: any) {
    // console.log(event.target.value);
    this.productsList = event.target.value;
  }

}
