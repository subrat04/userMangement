import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiuxdesigenComponent } from './uiuxdesigen.component';

describe('UiuxdesigenComponent', () => {
  let component: UiuxdesigenComponent;
  let fixture: ComponentFixture<UiuxdesigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiuxdesigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiuxdesigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
