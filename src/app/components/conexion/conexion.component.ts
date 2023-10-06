import { Component } from '@angular/core';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.scss']
})
export class ConexionComponent {
  connexion = { email: '', password: '' };

  soumettreConnexion() {
    // Logique de soumission du formulaire de connexion
  }

  passerEnModeInscription() {
    // Logique pour passer au mode d'inscription
  }
}
