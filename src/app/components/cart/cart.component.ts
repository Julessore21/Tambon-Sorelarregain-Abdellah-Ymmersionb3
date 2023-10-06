import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public polos : any = [];
  public grandTotal : number = 0;
  public productsCart: any[] = [];

  constructor(private cartService : CartService){}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any)=>{
      this.polos = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.listcart();
    
  }

  listcart(){
    const cart = localStorage.getItem("product");
    console.log(cart)
    if (cart != null){
      this.productsCart.push(JSON.parse(cart));
    }
    console.log(this.productsCart)
  }
 
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
