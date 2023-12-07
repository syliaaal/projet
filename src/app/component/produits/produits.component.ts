import {
  NgForOf,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';

interface Produit {
    id: number;
    nom: string;
    src: string;
    description: string;
}


@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
   // Liste des produits
    produits= [
        {
          id: 1,
          nom: 'Maison 1',
          src: 'assets/images/img3.jpg',
          description: "Nichée au cœur d'un quartier paisible, cette charmante maison de trois chambres offre un mélange parfait de confort moderne et de charme rustique. À l'intérieur, vous découvrirez un spacieux salon baigné de lumière naturelle, une cuisine entièrement équipée avec des appareils en acier inoxydable, et une salle à manger accueillante parfaite pour des repas en famille. À l'étage, les chambres douillettes promettent repos et tranquillité. L'extérieur ne manque pas de séduire avec un jardin magnifiquement aménagé, idéal pour des après-midis détente ou des soirées barbecue. Cette maison est un véritable havre de paix, offrant intimité et confort, tout en étant à proximité des commodités essentielles."
        },
        {
          id: 2,
          nom: 'Maison 2',
          src: 'assets/images/img4.jpg',
          description: "Cette splendide villa de cinq chambres se distingue par sa luminosité exceptionnelle et son architecture unique. Dès l'entrée, vous serez accueilli par un vaste hall d'entrée menant à un salon spacieux avec de hauts plafonds et des fenêtres du sol au plafond, créant un espace de vie aéré et inondé de lumière. La cuisine, ouverte et moderne, est équipée d'appareils dernier cri et d'un espace repas convivial. Chaque chambre, y compris la suite parentale, offre une ambiance sereine et épurée, accentuée par des jeux de lumière naturelle. L'extérieur est tout aussi impressionnant, avec une grande piscine entourée de terrasses ensoleillées et un jardin paysager, parfait pour des moments de détente en plein air. Située dans un quartier prestigieux, cette maison combine élégance, confort et un cadre de vie lumineux et chaleureux."
        },
        {
          id: 3,
          nom: 'Maison 3',
          src: 'assets/images/img5.jpg',
          description: "Moderne et élégante, cette résidence de quatre chambres se distingue par son design contemporain et ses finitions haut de gamme. Le rez-de-chaussée présente un espace de vie ouvert, avec de grandes baies vitrées qui inondent la pièce d'une lumière naturelle éclatante, soulignant ainsi le plancher en bois noble et les détails architecturaux raffinés. La cuisine, un véritable chef-d'œuvre, dispose d'un îlot central, de plans de travail en quartz et d'équipements de pointe. À l'étage, les chambres sont des havres de paix avec des vues imprenables sur le paysage environnant. L'extérieur n'est pas en reste, avec une terrasse spacieuse et un jardin soigneusement entretenu, offrant un espace idéal pour des moments de détente ou de divertissement en plein air. Cette maison représente l'union parfaite entre luxe et fonctionnalité, située dans un quartier recherché pour son calme et sa proximité avec des écoles et des espaces verts."
        },
        {
          id: 4,
          nom: 'Maison 4',
          src: 'assets/images/img6.jpg',
          description: "Ce majestueux immeuble résidentiel, situé dans un quartier dynamique de la ville, allie design moderne et fonctionnalité. Chacun des appartements de cet immeuble offre un espace de vie spacieux, avec des finitions de haute qualité et des équipements modernes. Les grandes fenêtres assurent une abondance de lumière naturelle, mettant en valeur les intérieurs élégants et les vues panoramiques sur la ville. Les résidents bénéficient d'une gamme complète d'installations, dont un espace fitness ultramoderne, une terrasse sur le toit avec espace barbecue, et un hall d'entrée sécurisé avec conciergerie. L'immeuble est conçu pour offrir une expérience de vie urbaine de premier ordre, avec une proximité immédiate aux boutiques, restaurants, et espaces verts, rendant la vie quotidienne à la fois pratique et agréable."
        }
    ];

    produitSelectionne: Produit | null = null; // Produit sélectionné

    // Fonction pour sélectionner un produit
    afficherDetails(produit: Produit){
        this.produitSelectionne = produit;
    }

    // Fonction pour désélectionner un produit
    fermerDetails(){
        this.produitSelectionne = null;
    }
    // Fonction pour ajouter un nouveau produit
  ajouterProduit(nouveauProduit: Produit) {
    this.produits.push(nouveauProduit);
  }

  // Fonction pour mettre à jour un produit existant
  mettreAJourProduit(produitMisAJour: Produit) {
    const index = this.produits.findIndex(p => p.id === produitMisAJour.id);
    if (index !== -1) {
      this.produits[index] = produitMisAJour;
    }
  }

  // Fonction pour supprimer un produit
  supprimerProduit(idProduit: number) {
    this.produits = this.produits.filter(p => p.id !== idProduit);
    this.fermerDetails(); // Désélectionner le produit après la suppression
  }

}


