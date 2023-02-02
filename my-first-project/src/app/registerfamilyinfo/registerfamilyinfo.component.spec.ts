import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfamilyinfoComponent } from './registerfamilyinfo.component';

describe('RegisterfamilyinfoComponent', () => {
  let component: RegisterfamilyinfoComponent;
  let fixture: ComponentFixture<RegisterfamilyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfamilyinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterfamilyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
