import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderDataNowComponent } from './trader-data-now.component';

describe('TraderDataNowComponent', () => {
  let component: TraderDataNowComponent;
  let fixture: ComponentFixture<TraderDataNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderDataNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderDataNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
