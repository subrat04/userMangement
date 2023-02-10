import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentwritingComponent } from './contentwriting.component';

describe('ContentwritingComponent', () => {
  let component: ContentwritingComponent;
  let fixture: ComponentFixture<ContentwritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentwritingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
