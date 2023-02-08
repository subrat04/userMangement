import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognizanceComponent } from './cognizance.component';

describe('CognizanceComponent', () => {
  let component: CognizanceComponent;
  let fixture: ComponentFixture<CognizanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognizanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognizanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
