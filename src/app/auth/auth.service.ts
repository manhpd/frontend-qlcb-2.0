// filepath: c:\Users\manhp\Documents\Workplace\Angular\angular-nestjs-project\frontend\src\app\auth\auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.loadUserProfile();
    }
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  register(userData: {
    username: string;
    password: string;
    email: string;
    firstName?: string;
    lastName?: string;
  }) {
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  login(credentials: { username: string; password: string }) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('access_token', response.access_token);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  loadUserProfile() {
    return this.http.get<User>(`${this.apiUrl}/profile`, { headers: this.getHeaders() }).pipe(
      tap(user => this.currentUserSubject.next(user))
    );
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }

  updateProfile(userData: {
    email?: string;
    firstName?: string;
    lastName?: string;
  }) {
    return this.http.put<User>(`${this.apiUrl}/profile`, userData, { headers: this.getHeaders() }).pipe(
      tap(user => this.currentUserSubject.next(user))
    );
  }
}