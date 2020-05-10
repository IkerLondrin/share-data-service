import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesanidadosComponent } from './desanidados.component';

describe('DesanidadosComponent', () => {
  let component: DesanidadosComponent;
  let fixture: ComponentFixture<DesanidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesanidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesanidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
