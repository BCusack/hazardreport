import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordlessAuthPage } from './passwordless-auth.page';

describe('PasswordlessAuthPage', () => {
  let component: PasswordlessAuthPage;
  let fixture: ComponentFixture<PasswordlessAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordlessAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordlessAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
