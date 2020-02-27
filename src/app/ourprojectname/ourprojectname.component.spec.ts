import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprojectnameComponent } from './ourprojectname.component';

describe('OurprojectnameComponent', () => {
  let component: OurprojectnameComponent;
  let fixture: ComponentFixture<OurprojectnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurprojectnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprojectnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
