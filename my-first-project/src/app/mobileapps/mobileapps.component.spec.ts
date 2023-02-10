import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappsComponent } from './mobileapps.component';

describe('MobileappsComponent', () => {
  let component: MobileappsComponent;
  let fixture: ComponentFixture<MobileappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileappsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
