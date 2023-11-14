import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoggedIn$ : Observable<boolean>
  isLoggedOut$ : Observable<boolean>
  authService = inject(AuthService)

  constructor(){
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isLoggedOut$ = this.authService.isLoggedOut$;
  }

  logout(){
    this.authService.logout();
  }
}
