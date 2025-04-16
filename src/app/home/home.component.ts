import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="px-4 py-6 sm:px-0">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Welcome to the Home Page</h2>
        <p class="text-gray-600">
          This is a protected route. You can only see this if you're logged in.
        </p>
      </div>
    </div>
  `
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
} 