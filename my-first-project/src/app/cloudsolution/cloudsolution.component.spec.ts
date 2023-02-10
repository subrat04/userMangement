import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsolutionComponent } from './cloudsolution.component';

describe('CloudsolutionComponent', () => {
  let component: CloudsolutionComponent;
  let fixture: ComponentFixture<CloudsolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudsolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
