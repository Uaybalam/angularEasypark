import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(
    private router: Router,
  ) {}

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
