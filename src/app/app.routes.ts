import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
  { path: 'produits', component: ProduitComponent },
  { path: 'details/:id', component: DetailProduitComponent }
];
