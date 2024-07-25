import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';

interface Product {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, DetailProduitComponent],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        title: 'Framboise',
        description: 'La framboise est un fruit rouge issu du framboisier...',
        createdAt: new Date(),
        imageUrl: 'https://st.depositphotos.com/1006597/2513/i/450/depositphotos_25139115-stock-photo-raspberry.jpg',
        price: 100
      },
      {
        id: 2,
        title: 'Pomme',
        description: 'La pomme est un fruit à pépins comestible...',
        createdAt: new Date(),
        imageUrl: 'https://www.hagengrote.fr/la-gazette-des-gourmets/wp-content/uploads/2023/05/Apfel_FR_1.jpg',
        price: 100
      },
      // ... autres produits
      {
        id:3,
        title: 'Banane',
        description: 'La banane est le fruit ou la baie dérivée de l\'inflorescence du bananier.',
        createdAt: new Date(),
        imageUrl: 'https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/44/66/88/09/141409586216_News_NewsRevision_10011.jpg',
        price:100,
      },
      {
        id:4,
        title: 'Orange',
        description: 'L\'orange est un agrume, fruit de l\'oranger. L\'orange est un fruit généralement rond, de couleur orange.',
        createdAt: new Date(),
        imageUrl: 'https://static.techno-science.net/illustration/Definitions/1200px/a/ambersweet-oranges_3d6d0e4edefeaad5bacebd44126416a4.jpg',
        price:100,

      },
      {
        id:5,
        title: 'Kiwi',
        description: 'Le kiwi est une baie comestible produite par des lianes du genre Actinidia.',
        createdAt: new Date(),
        imageUrl: 'https://assets.afcdn.com/story/20240311/2244042_w1200h1200c1cx600cy315cxt0cyt0cxb1200cyb630.jpg',
        price:100,

      },
      {
        id:6,
        title: 'Mangue',
        description: 'La mangue est un fruit tropical du manguier, arbre de la famille des Anacardiaceae.',
        createdAt: new Date(),
        imageUrl: 'https://png.pngtree.com/png-vector/20240528/ourlarge/pngtree-ripe-mango-and-slice-with-glass-of-juice-png-image_12514028.png',
        price:100,

      }
    ];
  }

  viewDetails(product: Product): void {
    this.selectedProduct = product;
    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
