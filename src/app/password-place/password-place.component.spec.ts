import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPlaceComponent } from './password-place.component';

describe('PasswordPlaceComponent', () => {
  let component: PasswordPlaceComponent;
  let fixture: ComponentFixture<PasswordPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
