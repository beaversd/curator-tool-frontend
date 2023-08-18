import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(private router: Router) { }

  navigateTo(page: string): void {

    if (page === 'home') {
      this.router.navigate(['/attribute-table/attribute/Polymer']);

    }

    else if (page === 'about') {
      // Navigate to the "About" page (adjust the route as needed)
      this.router.navigate(['/attribute-table/attribute/Polymer']);
    }

    else if (page === 'contact') {
      // Navigate to the "Contact" page (adjust the route as needed)
      this.router.navigate(['/attribute-table/attribute/Polymer']);
    }


  }
}