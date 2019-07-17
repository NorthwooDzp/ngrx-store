import { TestBed, async, inject } from '@angular/core/testing';

import { PizzaExistsGuard } from './pizza-exists.guard';

describe('PizzaExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaExistsGuard]
    });
  });

  it('should ...', inject([PizzaExistsGuard], (guard: PizzaExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
