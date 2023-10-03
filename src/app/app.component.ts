import { Component, OnInit } from '@angular/core';
import { SneakersService } from './services/sneakers.service';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected title: string = "Shopping App";

  constructor(
    public sneakersService: SneakersService,
    public dataService: DataService
  ){}

  ngOnInit() {
    this.sneakersService.getSneakers();
  };

  displayerBuySneaker(){
    console.log("Buy Sneaker");
  }
}
