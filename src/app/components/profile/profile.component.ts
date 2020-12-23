import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/card.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cards: Array<card>;
  cards2: Array<card>;

  constructor() { 
    this.cards = new Array<card>();
    this.cards2 = new Array<card>();
  }

  ngOnInit() {
    this.onFillCards();
  }
  onFillCards() {
    const styleImg = { width: '60px', height: '60px'};
    const styleImgSpe = { width: '100px'};
    const card = [
      { 
        title: 'Front-End', 
        images: [{src: 'assets/AngularJS.svg', style: styleImg, tooltip: 'AngularJS'}, {src: 'assets/CSS3.svg', style: styleImg, tooltip: 'CSS3'}, {src: 'assets/HTML5.svg', style: styleImg, tooltip: 'HTML5'}, {src: 'assets/JavaScript.svg', style: styleImg, tooltip: 'JS'}, {src: 'assets/Bootstrap.svg', style: styleImg, tooltip: 'Bootstrap 4.5'}, {src: 'assets/Angular.svg', style: styleImg, tooltip: 'Angular'}]
      },
      { 
        title: 'Back-End', 
        images: [{src: 'assets/csharp.svg', style: styleImg, tooltip: 'C#'}, {src: 'assets/NodeJS.svg', style: styleImg, tooltip: 'NodeJS'}, {src: 'assets/img/socketIO.png', style: styleImg, tooltip: 'SocketIO'}]
      },
      { 
        title: 'Herramientas', 
        images: [{src: 'assets/Visual Studio.svg', style: styleImg, tooltip: 'Visual Studio'}, {src: 'assets/GitHub.svg', style: styleImg, tooltip: 'GitHub'}, {src: 'assets/Git.svg', style: styleImg, tooltip: 'Git'}, {src: 'assets/VisualStudioCode.svg', style: styleImg, tooltip: 'Visual Studio Code'}, {src: 'assets/TFS.svg', style: styleImg, tooltip: 'TFS'}]
      }
    ];
    const cards2 = [
      { 
        title: 'Gestores de base de datos', 
        images: [{src: 'assets/sql.svg', style: styleImg, tooltip: 'SQL Server'}, {src: 'assets/mysql.svg', style: styleImg, tooltip: 'MySQL'}, {src: 'assets/img/SAP-Business-One-Hana.jpg', style: styleImgSpe, tooltip: 'SAP Hana'}]
      },
      { 
        title: 'SDK', 
        images: [{src: 'assets/img/Flutter.png', style: styleImgSpe, tooltip: 'Flutter'}, {src: 'assets/img/Sap-B1-Logo-png.png', style: styleImgSpe, tooltip: 'SAP B1'}, {src: 'assets/img/SAP-Business-One-Hana.jpg', style: styleImgSpe, tooltip: 'SAP B1 Hana'}]
      }
    ];
    this.cards = card;
    this.cards2 = cards2;
  }
}
