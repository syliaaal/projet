import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrigé à styleUrls
})
export class HomeComponent {
    imgurl = 'assets/images/img.jpeg';
    titre = 'Mon image';

  /*  images = [
        {
            src: 'assets/images/img.png',
            titre: 'Image 1'
        },
        {
            src: 'assets/images/01.jpg',
            titre: 'Image 2'
        }
    ];

    currentIndex = 0; // On initialise à l'index de la première image

    nextImage() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // On à la première image si la fin est atteinte
        }
    }

    previousImage() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.images.length - 1; // On va à la dernière image si le début est atteint
        }
    }*/

    imgUrl = "assets/images/img2.jpg";
    titreImg = "Paysage";
    i = 0; // Index pour parcourir le tableau d'images
    images = [
        { imgUrl: "assets/images/img.jpeg", titreImg: "paysage" },
        { imgUrl: "assets/images/img2.jpg", titreImg: "paysage 2" },
    ];

  // Fonction pour changer l'image et le titre
    changeImage() {
        this.i++; // Incrémenter l'index pour aller à la prochaine image
        if (this.i >= this.images.length) {
        this.i = 0; // Revenir au début du tableau si la fin est atteinte
        }
        this.imgUrl = this.images[this.i].imgUrl;
        this.titreImg = this.images[this.i].titreImg;
    };
}
