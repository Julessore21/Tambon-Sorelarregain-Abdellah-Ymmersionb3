import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';

// Importez ici le service PolosService
import { PolosService } from './services/polos.service'; // Assurez-vous que le chemin d'importation est correct

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    DetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    // Ajoutez le service PolosService ici
    PolosService // Assurez-vous que le nom du service est correctement orthographié ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
