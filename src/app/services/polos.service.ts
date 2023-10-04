import { Injectable } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class polosService {

  public polos: any[] = [];

  public category: string = "tous";

  constructor(
    protected dataService: DataService
  ) { }

  getPolos(){
    this.dataService.getPolos().subscribe((data: any) => {
      this.polos = data.polos;
      this.category = "tous";
      console.log(this.polos)
    });
  }

  getPolosByCategory(category: string){
    this.dataService.getPolosByCategory(category).subscribe((data: any) => {
      this.polos = data.polos;
      this.category = category;
    })
  }
}
