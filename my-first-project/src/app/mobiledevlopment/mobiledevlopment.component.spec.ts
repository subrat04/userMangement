import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledevlopmentComponent } from './mobiledevlopment.component';

describe('MobiledevlopmentComponent', () => {
  let component: MobiledevlopmentComponent;
  let fixture: ComponentFixture<MobiledevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiledevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiledevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
