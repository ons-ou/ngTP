import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { loginDto } from '../../dtos/login.dto';
import { Response } from '../../dtos/response.dto';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  toaster = inject(ToastrService);
  router = inject(Router)
  
  isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { 

    const token = localStorage.getItem("token")
    
    if (token !== null){

      this.isLoggedIn.next(true);
    }
    else this.isLoggedIn.next(false)
  }

  public isTokenExpired(token: String): boolean {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    const { exp } = JSON.parse(jsonPayload);
    const expired = Date.now() >= exp * 1000;
    return expired;
  }

  login(dto: loginDto)  {
    return this.http.post<Response>('https://apilb.tridevs.net/api/Users/login', dto)
    .subscribe(
      {
        next: (res) =>{
          console.log(res);
          localStorage.setItem("token", res.id);
          const user = {
            email: dto.email,
            password: dto.password
          }
          localStorage.setItem("user", JSON.stringify(user));
          
          this.isLoggedIn.next(true);
          
          this.router.navigate(['cv'])
        },
        error: (err)=>{
          this.toaster.error(`${err.status} - ${err.statusText}`);
        }
      }
    )
  }

  logout(){
    localStorage.removeItem("token");
    this.isLoggedIn.next(false);
  }
  
}

