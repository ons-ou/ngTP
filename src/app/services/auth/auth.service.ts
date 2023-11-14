import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { loginDto } from '../../dtos/login.dto';
import { Response } from '../../dtos/response.dto';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  toaster = inject(ToastrService);
  router = inject(Router);

  isLoggedIn$ : Observable<boolean>
  user = new BehaviorSubject<User | null>(null);
  isLoggedOut$ :Observable<boolean>

  loginUser(user: User) {
    this.user.next(user);
  }

  constructor() {
    const user = localStorage.getItem('user');

    this.isLoggedIn$ = this.user.pipe(
      map((res)=>{
        if (res == null)
          return false
        return true
      })
    )

    this.isLoggedOut$ = this.user.pipe(
      map((res)=>{
        if (res == null)
          return true
        return false
      })
    )

    if (user !== null) {
      this.loginUser(JSON.parse(user));
    } else {
      this.logout();
    }
  }

  login(dto: loginDto) {
    return this.http
      .post<Response>('https://apilb.tridevs.net/api/Users/login', dto)
      .pipe(
        tap((res) =>{
          const user = {
            email: dto.email,
            id: res.userId,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.loginUser(user);   
        }),
      )
  }

  logout() {
    localStorage.removeItem("user");
    this.user.next(null);
  }
}
