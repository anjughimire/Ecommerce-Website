import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // constructor(private http: HttpClient) { }

  // getCategory() {
  //   return { "message": "", "result": true, "data": [{ "categoryId": 55, "categoryName": "Fruits & Vegetables", "parentCategoryId": 0, "userId": null }, { "categoryId": 56, "categoryName": "Foodgrains, Oil & Masala", "parentCategoryId": 0, "userId": null }, { "categoryId": 57, "categoryName": "Bakery, Cakes & Dairy", "parentCategoryId": 0, "userId": null }, { "categoryId": 58, "categoryName": "Beverages", "parentCategoryId": 0, "userId": null }, { "categoryId": 59, "categoryName": "Snacks & Branded Foods", "parentCategoryId": 0, "userId": null }, { "categoryId": 61, "categoryName": "Cuts & Sprouts", "parentCategoryId": 55, "userId": null }, { "categoryId": 62, "categoryName": "Dals & Pulses", "parentCategoryId": 55, "userId": null }, { "categoryId": 63, "categoryName": "Exotic Fruits & Veggies", "parentCategoryId": 55, "userId": null }, { "categoryId": 64, "categoryName": "Flower Bouquets, Bunches", "parentCategoryId": 55, "userId": null }, { "categoryId": 65, "categoryName": "Atta, Flours & Sooji", "parentCategoryId": 56, "userId": null }, { "categoryId": 66, "categoryName": "Dry Fruits", "parentCategoryId": 56, "userId": null }, { "categoryId": 67, "categoryName": "Edible Oils & Ghee", "parentCategoryId": 56, "userId": null }, { "categoryId": 68, "categoryName": "Bakery Snacks", "parentCategoryId": 57, "userId": null }, { "categoryId": 69, "categoryName": "Cakes & Pastries", "parentCategoryId": 57, "userId": null }, { "categoryId": 75, "categoryName": "Snacks", "parentCategoryId": 0, "userId": null }, { "categoryId": 76, "categoryName": "soft drinks", "parentCategoryId": 0, "userId": null }, { "categoryId": 77, "categoryName": "BBQ", "parentCategoryId": 0, "userId": null }, { "categoryId": 81, "categoryName": "Cat E", "parentCategoryId": 0, "userId": null }, { "categoryId": 82, "categoryName": "string", "parentCategoryId": 0, "userId": null }, { "categoryId": 83, "categoryName": "Fragrances", "parentCategoryId": 0, "userId": null }, { "categoryId": 84, "categoryName": "Fragrances & Scents", "parentCategoryId": 0, "userId": null }, { "categoryId": 85, "categoryName": "Scents", "parentCategoryId": 0, "userId": null }, { "categoryId": 86, "categoryName": "FragrancesNew", "parentCategoryId": 0, "userId": null }, { "categoryId": 87, "categoryName": "ScentsNew", "parentCategoryId": 0, "userId": null }, { "categoryId": 88, "categoryName": "Oil & Masala", "parentCategoryId": 0, "userId": null }, { "categoryId": 89, "categoryName": "T-shirts", "parentCategoryId": 0, "userId": null }, { "categoryId": 90, "categoryName": "eyob", "parentCategoryId": 0, "userId": null }, { "categoryId": 91, "categoryName": "ftayer", "parentCategoryId": 0, "userId": null }, { "categoryId": 92, "categoryName": "a", "parentCategoryId": 1, "userId": null }, { "categoryId": 93, "categoryName": "Home and kitchen", "parentCategoryId": 0, "userId": null }, { "categoryId": 94, "categoryName": "prt", "parentCategoryId": 0, "userId": null }, { "categoryId": 95, "categoryName": "Mobile", "parentCategoryId": 0, "userId": 123 }] };
  // }

  // getProducts() {
  //   return {
  //     "message": "",
  //     "result": true,
  //     "data": [
  //       {
  //         "productId": 962,
  //         "productSku": "zz",
  //         "productName": "Pizza",
  //         "productPrice": 145,
  //         "productShortName": "White Flour",
  //         "productDescription": "Pizza Images ",
  //         "createdDate": "2024-04-20T15:30:55.917",
  //         "deliveryTimeSpan": "1",
  //         "categoryId": 58,
  //         "productImageUrl": "https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1205.jpg?w=740&t=st=1718028892~exp=1718029492~hmac=45eab840541d93e98fb80ae70746c47b06e858aab19b9297416f63a1c68785cc",
  //         "categoryName": "Beverages"
  //       },
  //     ]
  //   }
  // }

  // saveProducts(obj: any){
  //     return 
  // }

  private apiUrl = "http://localhost:3000/data";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  //get All Methods
  getCategory():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}`)
                .pipe(catchError((error:HttpErrorResponse)=>{
                  return throwError(error);
                }))
  }

  getProducts():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}`)
        .pipe(catchError((error:HttpErrorResponse)=>{
          return throwError(error);
        }))
  }

  saveProduct(obj: any):Observable<any>{
    return this.httpClient.post(`${this.apiUrl}`, obj)
        .pipe(catchError((error:HttpErrorResponse)=>{
          return throwError(error);
        }))
  }
}
