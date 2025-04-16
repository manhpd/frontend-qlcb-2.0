import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerDetailComponent } from './officer-detail.component';

describe('OfficerDetailComponent', () => {
  let component: OfficerDetailComponent;
  let fixture: ComponentFixture<OfficerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
