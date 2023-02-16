import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public routerService: Router, public authService: AuthService) {
  }

  goHome() {
    this.routerService.navigate(['home']);
  }
  goLogin() {
    this.routerService.navigate(['login']);
  }
  goLogout() {
    this.routerService.navigate(['logout']);
  }
}
