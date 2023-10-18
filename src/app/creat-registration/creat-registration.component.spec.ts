import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatRegistrationComponent } from './creat-registration.component';

describe('CreatRegistrationComponent', () => {
  let component: CreatRegistrationComponent;
  let fixture: ComponentFixture<CreatRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatRegistrationComponent]
    });
    fixture = TestBed.createComponent(CreatRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
