import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmsdashboardComponent } from './armsdashboard.component';

describe('ArmsdashboardComponent', () => {
  let component: ArmsdashboardComponent;
  let fixture: ComponentFixture<ArmsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
