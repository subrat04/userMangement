import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroiddevlopmentComponent } from './androiddevlopment.component';

describe('AndroiddevlopmentComponent', () => {
  let component: AndroiddevlopmentComponent;
  let fixture: ComponentFixture<AndroiddevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroiddevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroiddevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
