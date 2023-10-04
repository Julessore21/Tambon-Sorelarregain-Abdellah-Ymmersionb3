import { Component, OnInit } from '@angular/core';
import { polosService } from './services/polos.service';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
