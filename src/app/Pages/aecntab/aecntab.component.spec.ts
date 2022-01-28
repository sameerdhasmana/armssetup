import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AecntabComponent } from './aecntab.component';

describe('AecntabComponent', () => {
  let component: AecntabComponent;
  let fixture: ComponentFixture<AecntabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AecntabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AecntabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
