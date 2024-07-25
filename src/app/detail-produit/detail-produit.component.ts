import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../produit/produit.component';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {
  @Input() product!: Product;
}
