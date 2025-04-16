import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

type NavbarState = 'full' | 'small' | 'hidden';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  navbarState: NavbarState = 'full';
  private resizeTimeout: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenSize();
  }

  ngOnDestroy() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  @HostListener('window:resize')
  onResize() {
    // Debounce resize events
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.checkScreenSize();
    }, 250);
  }

  private checkScreenSize() {
    const width = window.innerWidth;
    if (width < 640) { // sm breakpoint
      this.navbarState = 'hidden';
    } else if (width < 1024) { // lg breakpoint
      this.navbarState = 'small';
    } else {
      this.navbarState = 'full';
    }
  }

  toggleNavbar() {
    if (this.navbarState === 'hidden') {
      this.navbarState = 'full';
    } else if (this.navbarState === 'full') {
      this.navbarState = 'small';
    } else {
      this.navbarState = 'hidden';
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
} 