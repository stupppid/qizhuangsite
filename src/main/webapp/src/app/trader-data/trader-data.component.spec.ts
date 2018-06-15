import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderDataComponent } from './trader-data.component';

describe('TraderDataComponent', () => {
  let component: TraderDataComponent;
  let fixture: ComponentFixture<TraderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
