import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { polosService } from 'src/app/services/polos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title: string = "Shopping App";

  constructor(
    public polosService: polosService,
    public dataService: DataService
  ){}

  ngOnInit() {
    this.polosService.getPolos();
  };

  displayerBuypolo(){
    console.log("Buy polo");
  }
}
