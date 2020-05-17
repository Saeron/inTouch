import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcarComponent } from './modifcar.component';

describe('ModifcarComponent', () => {
  let component: ModifcarComponent;
  let fixture: ComponentFixture<ModifcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
