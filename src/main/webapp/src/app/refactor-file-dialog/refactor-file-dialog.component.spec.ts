import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorFileDialogComponent } from './refactor-file-dialog.component';

describe('RefactorFileDialogComponent', () => {
  let component: RefactorFileDialogComponent;
  let fixture: ComponentFixture<RefactorFileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefactorFileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactorFileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
