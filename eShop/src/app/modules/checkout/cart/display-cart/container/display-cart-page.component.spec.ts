import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCartPageComponent } from './display-cart-page.component';

describe('DisplayCartPageComponent', () => {
  let component: DisplayCartPageComponent;
  let fixture: ComponentFixture<DisplayCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
