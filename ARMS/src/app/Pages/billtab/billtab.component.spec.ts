import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltabComponent } from './billtab.component';

describe('BilltabComponent', () => {
  let component: BilltabComponent;
  let fixture: ComponentFixture<BilltabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilltabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
