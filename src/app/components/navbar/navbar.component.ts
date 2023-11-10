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
  authService = inject(AuthService)

  constructor(){
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.authService.isLoggedIn.subscribe(
      (res)=>{ console.log(res)}
    )
  }

  logout(){
    this.authService.logout();
  }
}
