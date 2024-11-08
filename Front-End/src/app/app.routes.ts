import { Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateSaleComponent } from './components/create-sale/create-sale.component';
import { FormularyComponent } from './components/formulary/formulary.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: FormularyComponent },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'create-sale', component: CreateSaleComponent, canActivate: [AuthGuard] }
];
