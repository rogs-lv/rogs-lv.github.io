import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  
  onActivateProfile(event) {
    window.scroll(0,700);
  }
  onActivateProject(event) {
    window.scroll(0,1800);
  }
}
