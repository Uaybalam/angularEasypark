import { Component, ViewChild } from '@angular/core';
import { FacturacionServiceService } from 'src/assets/service/Facturacion-service/facturacion-service.service';
import { ShowErrorService } from '../show-error/show-error.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent {
  datosFacturacion: any = {};
  captchaToken!: string;
  captchaResuelto: boolean= false;
  contactoFormSubmitted: boolean = false;
  campoInvalido = {
  razonsocial: false,
  rfc: false,
  domicilio: false,
  telefono: false,
  email: false,
  ticket: false,
  formapago: false,
  montopago: false,
};


  @ViewChild('contacto', { static: true }) contactoForm!: NgForm;

  constructor(private facturaService: FacturacionServiceService, private _showservice: ShowErrorService, private _fb: FormBuilder, private router: Router,) {}
  ngOnInit() {

    this.datosFacturacion = this._fb.group({
      razonsocial: [null, Validators.required],
      rfc: [null, Validators.required],
      domicilio: [null, Validators.required],
      telefono: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: [null, Validators.email],
      ticket: [null, Validators.required],
      formapago: [null, Validators.required],
      montopago: [null, Validators.required],
    });
  }
  onSubmit() {
    if (this.captchaResuelto && !this.datosFacturacion.invalid) {
      this._showservice.showLoading()
      this.facturaService
        .enviarDatosFacturacion(this.datosFacturacion, this.captchaToken)
        .then(
          (response) => {
            this._showservice.hideLoading()
            this._showservice.success("Correo enviado correctamente.")
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          },
          (error) => {
            this._showservice.hideLoading()
            this._showservice.statusCode(error)
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          }
        );
    }
    else
    {
      this._showservice.nosuccess("Porfavor revisa que el capo de Email(ejemplo@correo.com) y Telefono(1234567890) esten llenos correctamente o que todos los campos esten llenos")
    }
  }

  onHcaptchaSubmit(event: any) {
    this.captchaResuelto = true;
    this.captchaToken = event;
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
