import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalToolsComponent } from './personal-tools.component';

describe('PersonalToolsComponent', () => {
  let component: PersonalToolsComponent;
  let fixture: ComponentFixture<PersonalToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
