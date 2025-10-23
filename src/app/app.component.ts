import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easypark';
  isMenuOpen: boolean = false;


  constructor(
    private router: Router,
  ) {
        // Suscribirse a eventos de navegación
        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.closeMenu(); // Cierra el menú al navegar a otra pestaña
          }
        });

  }



  toggleMenu() {
    console.log(this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }


  closeMenu() {
    this.isMenuOpen = false;
  }
  navegarBeneficio() {
    this.router.navigate(['Beneficios']);
  }

  navegarContacto() {
    this.router.navigate(['Contacto']);
  }

  navegarFactura() {
    this.router.navigate(['Facturar']);
  }

  navegarinicio() {
    this.router.navigate(['']);
  }
}
