import { TestBed, async, inject } from '@angular/core/testing';

import { ToppingGuard } from './topping.guard';

describe('ToppingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToppingGuard]
    });
  });

  it('should ...', inject([ToppingGuard], (guard: ToppingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
