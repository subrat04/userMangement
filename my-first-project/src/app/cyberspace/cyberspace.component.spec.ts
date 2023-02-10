import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberspaceComponent } from './cyberspace.component';

describe('CyberspaceComponent', () => {
  let component: CyberspaceComponent;
  let fixture: ComponentFixture<CyberspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
