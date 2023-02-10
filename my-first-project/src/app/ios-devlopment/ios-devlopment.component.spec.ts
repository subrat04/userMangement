import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosDevlopmentComponent } from './ios-devlopment.component';

describe('IosDevlopmentComponent', () => {
  let component: IosDevlopmentComponent;
  let fixture: ComponentFixture<IosDevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosDevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosDevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
