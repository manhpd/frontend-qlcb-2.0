// filepath: c:\Users\manhp\Documents\Workplace\Angular\angular-nestjs-project\frontend\src\app\login\login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  isLoading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  login() {
    if (!this.username || !this.password) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;
    this.error = '';

    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error?.message || 'An error occurred during login';
        }
      });
  }
}