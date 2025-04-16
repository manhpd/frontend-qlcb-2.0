import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService, User } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  isEditingEmail = false;
  isEditingFirstName = false;
  isEditingLastName = false;
  editedEmail = '';
  editedFirstName = '';
  editedLastName = '';
  isLoading = false;
  error = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      if (!user) {
        this.authService.loadUserProfile().subscribe();
      } else {
        this.user = user;
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  startEditing(field: 'email' | 'firstName' | 'lastName') {
    if (field === 'email') {
      this.isEditingEmail = true;
      this.editedEmail = this.user?.email || '';
    } else if (field === 'firstName') {
      this.isEditingFirstName = true;
      this.editedFirstName = this.user?.firstName || '';
    } else if (field === 'lastName') {
      this.isEditingLastName = true;
      this.editedLastName = this.user?.lastName || '';
    }
  }

  cancelEditing(field: 'email' | 'firstName' | 'lastName') {
    if (field === 'email') {
      this.isEditingEmail = false;
      this.editedEmail = '';
    } else if (field === 'firstName') {
      this.isEditingFirstName = false;
      this.editedFirstName = '';
    } else if (field === 'lastName') {
      this.isEditingLastName = false;
      this.editedLastName = '';
    }
  }

  saveEmail() {
    if (!this.editedEmail) {
      this.error = 'Email cannot be empty';
      return;
    }

    this.isLoading = true;
    this.error = '';

    this.authService.updateProfile({ email: this.editedEmail }).subscribe({
      next: () => {
        this.isEditingEmail = false;
        this.editedEmail = '';
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'An error occurred while updating email';
        this.isLoading = false;
      }
    });
  }

  saveFirstName() {
    this.isLoading = true;
    this.error = '';
    this.authService.updateProfile({ firstName: this.editedFirstName }).subscribe({
      next: () => {
        this.isEditingFirstName = false;
        this.editedFirstName = '';
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'An error occurred while updating first name';
        this.isLoading = false;
      }
    });
  }

  saveLastName() {
    this.isLoading = true;
    this.error = '';

    this.authService.updateProfile({ lastName: this.editedLastName }).subscribe({
      next: () => {
        this.isEditingLastName = false;
        this.editedLastName = '';
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'An error occurred while updating last name';
        this.isLoading = false;
      }
    });
  }
} 