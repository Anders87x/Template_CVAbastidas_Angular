import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenComponent } from './resumen.component';

describe('ResumenComponent', () => {
  let component: ResumenComponent;
  let fixture: ComponentFixture<ResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
