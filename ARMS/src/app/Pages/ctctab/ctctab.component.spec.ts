import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtctabComponent } from './ctctab.component';

describe('CtctabComponent', () => {
  let component: CtctabComponent;
  let fixture: ComponentFixture<CtctabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtctabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtctabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
