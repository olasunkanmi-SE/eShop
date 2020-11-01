import { DisplayCartComponent } from './display-cart.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DisplayCartComponent', () => {
  let component: DisplayCartComponent;
  let fixture: ComponentFixture<DisplayCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
