import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { categoryList } from '../categories/categoryList';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productObj: any ={
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };

  categoryList: categoryList [] =[];
  productList: any [] =[];

  constructor(private productService: ProductService){

  }

  ngOnInit():void{
    this.getProducts();
    this.getAllCategory();
    
  }

  getProducts(){
    this.productService.getProducts().subscribe((data:any[])=>{
      this.productList = data;
    })
  }

  getAllCategory(){
    this.productService.getCategory().subscribe((data:categoryList[])=>{
      this.categoryList = data;
    })
  }

  onSave(){
    this.productService.saveProduct(this.productObj).subscribe((res:categoryList)=>{
      console.log('jbnm',res);
    })
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  // getAllCategory(){
  //   // this.categoryList = this.productService.getCategory().data;
  //   this.productService.getAll().subscribe(
  //     (response) => {
  //       this.categoryList = response.data;
  //     },
  //     (error) => {
  //       console.error('Error fetching categories', error);
  //     }
  //   );
}
