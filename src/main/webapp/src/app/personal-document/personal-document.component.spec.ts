import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDocumentComponent } from './personal-document.component';

describe('PersonalDocumentComponent', () => {
  let component: PersonalDocumentComponent;
  let fixture: ComponentFixture<PersonalDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
