import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsoftwaredevComponent } from './customsoftwaredev.component';

describe('CustomsoftwaredevComponent', () => {
  let component: CustomsoftwaredevComponent;
  let fixture: ComponentFixture<CustomsoftwaredevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsoftwaredevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsoftwaredevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
