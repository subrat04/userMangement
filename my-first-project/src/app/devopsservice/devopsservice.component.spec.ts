import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsserviceComponent } from './devopsservice.component';

describe('DevopsserviceComponent', () => {
  let component: DevopsserviceComponent;
  let fixture: ComponentFixture<DevopsserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
