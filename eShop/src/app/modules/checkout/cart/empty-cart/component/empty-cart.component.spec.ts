import { EmptyCartComponent } from './empty-cart.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmptyCartComponent', () => {
  let component: EmptyCartComponent;
  let fixture: ComponentFixture<EmptyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyCartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
