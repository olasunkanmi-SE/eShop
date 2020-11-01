import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPageComponent } from './interested-page.component';

describe('InterestedPageComponent', () => {
  let component: InterestedPageComponent;
  let fixture: ComponentFixture<InterestedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterestedPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
