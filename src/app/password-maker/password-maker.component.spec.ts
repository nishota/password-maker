import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMakerComponent } from './password-maker.component';

describe('PasswordMakerComponent', () => {
  let component: PasswordMakerComponent;
  let fixture: ComponentFixture<PasswordMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
