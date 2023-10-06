import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.scss']
})
export class MonCompteComponent {
  mode: 'inscription' | 'connexion' = 'inscription';

  inscription = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  connexion = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  soumettreInscription() {
    // Logique de soumission du formulaire d'inscription
    console.log('Formulaire d\'inscription soumis');
  }

  soumettreConnexion() {
    // Logique de soumission du formulaire de connexion
    console.log('Formulaire de connexion soumis');
  }

  passerEnModeConnexion() {
    this.mode = 'connexion';
  }

  passerEnModeInscription() {
    this.mode = 'inscription';
  }

  redirigerVersConnexion() {
    this.router.navigate(['/connexion']);
  }
}
