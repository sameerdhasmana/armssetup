import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnatabComponent } from './acnatab.component';

describe('AcnatabComponent', () => {
  let component: AcnatabComponent;
  let fixture: ComponentFixture<AcnatabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcnatabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnatabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
