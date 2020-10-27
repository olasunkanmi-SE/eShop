import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPageComponent } from './add-product-page.component';

describe('AddProductPageComponent', () => {
  let component: AddProductPageComponent;
  let fixture: ComponentFixture<AddProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
