import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckKegComponent } from './check-keg.component';

describe('CheckKegComponent', () => {
  let component: CheckKegComponent;
  let fixture: ComponentFixture<CheckKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
