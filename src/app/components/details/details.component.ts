import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  public polo: any;

  constructor(
    private route: ActivatedRoute,
    protected dataService: DataService,  
    private cartService:CartService,
  ){}

  ngOnInit(): void{
    this.dataService.getPolo(this.id).subscribe((data: any) => {
      this.polo = data.polo;
      this.polo.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:this.polo.price});
      });
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
