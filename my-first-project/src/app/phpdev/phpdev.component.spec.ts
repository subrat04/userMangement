import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpdevComponent } from './phpdev.component';

describe('PhpdevComponent', () => {
  let component: PhpdevComponent;
  let fixture: ComponentFixture<PhpdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpdevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
