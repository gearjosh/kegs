import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayKegsComponent } from './display-kegs.component';

describe('DisplayKegsComponent', () => {
  let component: DisplayKegsComponent;
  let fixture: ComponentFixture<DisplayKegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayKegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayKegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
