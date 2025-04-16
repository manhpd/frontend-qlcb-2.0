import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficerListComponent } from './officer-list/officer-list.component';
import { OfficerDetailComponent } from './officer-detail/officer-detail.component';
import { OfficerFormComponent } from './officer-form/officer-form.component';

const routes: Routes = [
  { path: '', component: OfficerListComponent },
  { path: 'new', component: OfficerFormComponent },
  { path: ':id', component: OfficerDetailComponent },
  { path: ':id/edit', component: OfficerFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    OfficerListComponent,
    OfficerDetailComponent,
    OfficerFormComponent
  ]
})
export class OfficerModule { } 