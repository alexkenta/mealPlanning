import { TestBed, inject } from '@angular/core/testing';

import { MealPlanningService } from './meal-planning.service';

describe('MealPlanningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealPlanningService]
    });
  });

  it('should be created', inject([MealPlanningService], (service: MealPlanningService) => {
    expect(service).toBeTruthy();
  }));
});
