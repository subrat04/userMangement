import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdesigenComponent } from './webdesigen.component';

describe('WebdesigenComponent', () => {
  let component: WebdesigenComponent;
  let fixture: ComponentFixture<WebdesigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdesigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdesigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
