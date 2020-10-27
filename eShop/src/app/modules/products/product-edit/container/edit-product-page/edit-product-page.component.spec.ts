import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPageComponent } from './edit-product-page.component';

describe('EditProductPageComponent', () => {
  let component: EditProductPageComponent;
  let fixture: ComponentFixture<EditProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
