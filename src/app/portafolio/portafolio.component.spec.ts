import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioComponent } from './portafolio.component';

describe('PortafolioComponent', () => {
  let component: PortafolioComponent;
  let fixture: ComponentFixture<PortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
