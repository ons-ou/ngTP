import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { loginDto } from '../../dtos/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService)
  submitForm(loginForm: NgForm){
    this.authService.login(
      new loginDto(loginForm.value.email, loginForm.value.password)
    )

  }
}
