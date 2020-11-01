import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonUiComponent } from './skeleton-ui.component';

describe('SkeletonUiComponent', () => {
  let component: SkeletonUiComponent;
  let fixture: ComponentFixture<SkeletonUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
