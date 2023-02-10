import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpdevlopmentblogComponent } from './phpdevlopmentblog.component';

describe('PhpdevlopmentblogComponent', () => {
  let component: PhpdevlopmentblogComponent;
  let fixture: ComponentFixture<PhpdevlopmentblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpdevlopmentblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpdevlopmentblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
