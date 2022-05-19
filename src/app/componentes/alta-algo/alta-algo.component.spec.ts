import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAlgoComponent } from './alta-algo.component';

describe('AltaAlgoComponent', () => {
  let component: AltaAlgoComponent;
  let fixture: ComponentFixture<AltaAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
