import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldetailuserComponent } from './alldetailuser.component';

describe('AlldetailuserComponent', () => {
  let component: AlldetailuserComponent;
  let fixture: ComponentFixture<AlldetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
