import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcntabComponent } from './ocntab.component';

describe('OcntabComponent', () => {
  let component: OcntabComponent;
  let fixture: ComponentFixture<OcntabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcntabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcntabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
