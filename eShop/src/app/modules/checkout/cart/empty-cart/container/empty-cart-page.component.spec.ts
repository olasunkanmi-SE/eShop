import { EmptyCartPageComponent } from './empty-cart-page.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmptyCartPageComponent', () => {
  let component: EmptyCartPageComponent;
  let fixture: ComponentFixture<EmptyCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyCartPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
