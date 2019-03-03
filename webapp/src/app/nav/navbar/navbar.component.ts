import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  activeRoute() {
    if (this.router.url == '/home') { return 0; }
    else if (this.router.url == "/projects") { return 1; }
    else if (this.router.url == "/experience") { return 2; }
  }

}
