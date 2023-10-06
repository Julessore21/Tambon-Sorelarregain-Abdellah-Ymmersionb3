import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title: string = "Shopping App";

  constructor(
    public dataService: DataService
  ){}
}
