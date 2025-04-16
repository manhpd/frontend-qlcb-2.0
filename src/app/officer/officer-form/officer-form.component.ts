import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OfficerService } from '../officer.service';
import { Officer } from '../officer.model';

@Component({
  selector: 'app-officer-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './officer-form.component.html',
  styleUrls: ['./officer-form.component.css']
})
export class OfficerFormComponent implements OnInit {
  officerForm: FormGroup;
  isLoading = false;
  error = '';
  isEditMode = false;
  officerId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private officerService: OfficerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.officerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: [''],
      position: [''],
      phoneNumber: [''],
      hireDate: [''],
      status: ['active']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.officerId = Number(id);
      this.loadOfficer(this.officerId);
      this.officerForm.get('username')?.disable();
      this.officerForm.get('password')?.disable();
    }
  }

  private loadOfficer(id: number): void {
    this.isLoading = true;
    this.officerService.getOfficer(id).subscribe({
      next: (officer) => {
        this.officerForm.patchValue({
          username: officer.username,
          email: officer.email,
          firstName: officer.firstName,
          lastName: officer.lastName,
          department: officer.department,
          position: officer.position,
          phoneNumber: officer.phoneNumber,
          hireDate: officer.hireDate,
          status: officer.status
        });
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'An error occurred while loading the officer';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.officerForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.error = '';

    if (this.isEditMode && this.officerId) {
      const updateData = { ...this.officerForm.value };
      delete updateData.username;
      delete updateData.password;

      this.officerService.updateOfficer(this.officerId, updateData).subscribe({
        next: () => {
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        error: (err) => {
          this.error = err.error?.message || 'An error occurred while updating the officer';
          this.isLoading = false;
        }
      });
    } else {
      this.officerService.createOfficer(this.officerForm.value).subscribe({
        next: () => {
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        error: (err) => {
          this.error = err.error?.message || 'An error occurred while creating the officer';
          this.isLoading = false;
        }
      });
    }
  }
}
