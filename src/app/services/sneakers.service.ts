import { Injectable } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  public sneakers: any[] = [];

  constructor(
    protected dataService: DataService
  ) { }

  getSneakers(){
    this.dataService.getSneakers().subscribe((data: any) => {
      console.log(data);
      this.sneakers = data.sneakers;
    });
  }
}
