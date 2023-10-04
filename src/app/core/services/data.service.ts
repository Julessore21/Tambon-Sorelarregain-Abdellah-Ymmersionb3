import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getPolos(){
    return this.http.get(`${this.url}polos`);
  }

  getPolo(id: any){
    return this.http.get(`${this.url}polo/${id}`);
  }

  getPolosByCategory(category: string) {
    return this.http.get(`${this.url}polos/${category}`);
  }
}
