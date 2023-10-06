import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public product : any = [];
  public grandTotal : number = 0;
  constructor(private cartService : CartService){}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any)=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    localStorage.getItem("cart");
    
  }
}
