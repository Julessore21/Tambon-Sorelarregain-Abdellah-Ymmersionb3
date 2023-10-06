import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { polosService } from 'src/app/services/polos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = "Shopping App";

  constructor(
    public dataService: DataService,
    public polosService: polosService
  ) {}

  ngOnInit(): void {
    this.polosService.getPolos();
  }

  triPrixCroissant(): void {
    // Utilisez JavaScript pour trier les éléments par prix croissant
    this.polosService.polos.sort((a, b) => a.price - b.price);
    // Actualisez l'affichage des éléments triés
    // Activez la classe "selected" pour "Prix croissant" et désactivez la classe pour "Prix décroissant"
    document.getElementById('triPrixCroissant')?.classList.add('selected');
    document.getElementById('triPrixDecroissant')?.classList.remove('selected');
  }

  triPrixDecroissant(): void {
    // Utilisez JavaScript pour trier les éléments par prix décroissant
    this.polosService.polos.sort((a, b) => b.price - a.price);
    // Actualisez l'affichage des éléments triés
    // Activez la classe "selected" pour "Prix décroissant" et désactivez la classe pour "Prix croissant"
    document.getElementById('triPrixDecroissant')?.classList.add('selected');
    document.getElementById('triPrixCroissant')?.classList.remove('selected');
}
}
