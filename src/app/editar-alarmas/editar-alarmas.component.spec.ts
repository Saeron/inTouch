import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlarmasComponent } from './editar-alarmas.component';

describe('EditarAlarmasComponent', () => {
  let component: EditarAlarmasComponent;
  let fixture: ComponentFixture<EditarAlarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAlarmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
