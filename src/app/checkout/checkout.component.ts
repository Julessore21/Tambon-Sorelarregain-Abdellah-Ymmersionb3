import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
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
