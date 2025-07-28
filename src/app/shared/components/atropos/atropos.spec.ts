import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atropos } from './atropos';

describe('Atropos', () => {
  let component: Atropos;
  let fixture: ComponentFixture<Atropos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atropos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atropos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
