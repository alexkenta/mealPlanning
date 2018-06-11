import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsAllComponent } from './polls-all.component';

describe('PollsAllComponent', () => {
  let component: PollsAllComponent;
  let fixture: ComponentFixture<PollsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
