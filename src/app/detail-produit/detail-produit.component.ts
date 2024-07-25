import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  imageUrl: string;
  price: number;
}

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
