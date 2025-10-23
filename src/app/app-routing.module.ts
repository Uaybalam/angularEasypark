import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PanelComponent } from './panel/panel.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

const routes: Routes = [
  { path: '', component: PanelComponent},
  { path: 'Facturar', component: FacturacionComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Beneficios', component: BeneficiosComponent},


  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
