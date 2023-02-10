import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpblogComponent } from './phpblog.component';

describe('PhpblogComponent', () => {
  let component: PhpblogComponent;
  let fixture: ComponentFixture<PhpblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
