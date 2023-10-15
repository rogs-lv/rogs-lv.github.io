import { Component } from '@angular/core';
import { card } from 'src/app/models/card.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  cards: Array<card>;
  cards2: Array<card>;
  cards3: Array<card>;
  cards4: Array<card>;
  sizeIconDapper = "2rem";
  sizeIconSap = "4rem";
  profileDev= "../../../assets/developer.svg"
  awscert = "../../../assets/aws-certified-cloud-practitioner.png"

  constructor() { 
    this.cards = new Array<card>();
    this.cards2 = new Array<card>();
    this.cards3 = new Array<card>();
    this.cards4 = new Array<card>();
  }

  ngOnInit() {
    this.onFillCards();
  }
  onFillCards() {
    const styleImg = { width: '60px', height: '60px'};
    const sizeImg = "250px"
    
    const card = [
      { 
        text: "C# (Advanced)",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
        maxWidth: sizeImg
      },
      { 
        text: "Python (Basic)",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: ".NET Framework",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: ".NET Core",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: "Angular 8",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
        maxWidth: sizeImg
      },
      
    ];
    const cardTwo = [
      { 
        text: "Angular JS",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: "dotCover",
        source: "../../../assets/dotcover.svg",
        maxWidth: sizeImg,
      },
      { 
        text: "Jira",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: "Git",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
        maxWidth: sizeImg
      },
      { 
        text: "GitHub",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        maxWidth: sizeImg
      },
    ];
    const cardThree = [
      { 
        text: "Docker",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: "Jenkis",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        maxWidth: sizeImg
      },
      { 
        text: "SQL Server",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
        maxWidth: sizeImg
      },
      { 
        text: "AWS",
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        maxWidth: sizeImg
      },
      { 
        text: "Postman",
        source: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        maxWidth: sizeImg
      },
    ]
    const cardFour = [
      { 
        text: "Dapper",
        source: "../../../assets/dapper.png",
        maxWidth: sizeImg,
        sizeIcon: "2rem",
        mtSpecific: "2"
      },
      { 
        text: "Sap Business One",
        source: "../../../assets/sap-business-one-logo.svg",
        maxWidth: sizeImg,
        sizeIcon: "4rem",
        mtSpecific: "3"
      },
      { 
        text: "Splunk",
        source: "../../../assets/splunk.svg",
        maxWidth: sizeImg,
        sizeIcon: "4rem",
        mtSpecific: "3"      
      },
    ]
    this.cards = card;   
    this.cards2 = cardTwo; 
    this.cards3 = cardThree;
    this.cards4 = cardFour;
  }
}
