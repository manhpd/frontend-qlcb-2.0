import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfficerService } from '../officer.service';
import { Officer } from '../officer.model';

@Component({
  selector: 'app-officer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.css']
})
export class OfficerListComponent implements OnInit {
  officers: Officer[] = [];
  isLoading = false;
  error = '';

  constructor(private officerService: OfficerService) {}

  ngOnInit(): void {
    this.loadOfficers();
  }

  loadOfficers(): void {
    this.isLoading = true;
    this.error = '';
    
    this.officerService.getOfficers().subscribe({
      next: (officers) => {
        this.officers = officers;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'An error occurred while loading officers';
        this.isLoading = false;
      }
    });
  }

  deleteOfficer(id: number): void {
    if (confirm('Are you sure you want to delete this officer?')) {
      this.officerService.deleteOfficer(id).subscribe({
        next: () => {
          this.officers = this.officers.filter(officer => officer.id !== id);
        },
        error: (err) => {
          this.error = err.error?.message || 'An error occurred while deleting the officer';
        }
      });
    }
  }
}
