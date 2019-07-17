import { TestBed, async, inject } from '@angular/core/testing';

import { PizzasGuard } from './pizzas.guard';

describe('PizzasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzasGuard]
    });
  });

  it('should ...', inject([PizzasGuard], (guard: PizzasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
