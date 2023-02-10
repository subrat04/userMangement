import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasdevlopmentComponent } from './saasdevlopment.component';

describe('SaasdevlopmentComponent', () => {
  let component: SaasdevlopmentComponent;
  let fixture: ComponentFixture<SaasdevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasdevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasdevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
