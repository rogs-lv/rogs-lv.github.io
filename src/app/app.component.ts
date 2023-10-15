import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  
  onActivateProfile(event:any) {
    window.scroll(0,700);
  }
  onActivateTech(event:any) {
    window.scroll(0,1100);
  }
  onActivateProject(event:any) {
    window.scroll(0,1800);
  }
  onActivateContact(event:any) {
    window.scroll(0,4000);
  }
}
