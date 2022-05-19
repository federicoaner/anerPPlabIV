import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSubirComponent } from './prueba-subir.component';

describe('PruebaSubirComponent', () => {
  let component: PruebaSubirComponent;
  let fixture: ComponentFixture<PruebaSubirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaSubirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
