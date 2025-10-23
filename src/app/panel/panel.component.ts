import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  
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
export class CotizacionComponent {
  llegada: string;
  salida: string;
  cotizacion: number;

  constructor() {
    this.llegada = '';
    this.salida = '';
    this.cotizacion = 0;
  }

  calcularCotizacion(): void {
    const llegadaDate = new Date(this.llegada);
    const salidaDate = new Date(this.salida);
    const diferencia = salidaDate.getTime() - llegadaDate.getTime();
    const dias = diferencia / (1000 * 60 * 60 * 24);
    const diasCobrar = Math.ceil(dias);
    this.cotizacion = diasCobrar * 189;
  }
}

