import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  isFeatureEnabled = false; // משתנה למעקב אחר מצב ה-Toggle
  imageUrls = [
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img1',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img2',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img3',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img4',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img5',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img6',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img7',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img8',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img9',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img10',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img11',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img12',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img13',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img14',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img15',    
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img16',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img17',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img18',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img19',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img20',
    'https://drive.google.com/uc?export=view&id=1LWugRC9_H1EtQMjHJmaPFIDkr94nBzBy_img21'
  ];

  config = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    navigation: true,
    loop: true,
  };
}