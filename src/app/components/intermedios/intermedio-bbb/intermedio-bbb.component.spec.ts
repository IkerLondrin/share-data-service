import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermedioBBBComponent } from './intermedio-bbb.component';

describe('IntermedioBBBComponent', () => {
  let component: IntermedioBBBComponent;
  let fixture: ComponentFixture<IntermedioBBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermedioBBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermedioBBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
