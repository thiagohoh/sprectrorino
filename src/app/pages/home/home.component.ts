import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private router: Router) {}

  redirectToMeltdown() {
    this.router.navigate(['/meltdown']); 
  }
  
  redirectToSpectre() {
    this.router.navigate(['/spectre']); 
  }

  redirectToSpectre2() {
    this.router.navigate(['/spectre2']); 
  }
  
  redirectToSpectrebtb() {
    this.router.navigate(['/btb']); 
  }
  
}
