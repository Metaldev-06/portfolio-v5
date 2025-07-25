import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSkills } from './carousel-skills';

describe('CarouselSkills', () => {
  let component: CarouselSkills;
  let fixture: ComponentFixture<CarouselSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
