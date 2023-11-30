import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { loginDto } from '../../dtos/login.dto';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService)
  router = inject(Router)

  submitForm(loginForm: NgForm){
    this.authService.login(
      new loginDto(loginForm.value.email, loginForm.value.password)
    ).subscribe(
      () => this.router.navigate(['cv'])
    )

  }
}
