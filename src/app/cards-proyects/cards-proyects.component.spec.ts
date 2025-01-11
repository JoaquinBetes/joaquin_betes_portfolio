import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProyectsComponent } from './cards-proyects.component';

describe('CardsProyectsComponent', () => {
  let component: CardsProyectsComponent;
  let fixture: ComponentFixture<CardsProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsProyectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
