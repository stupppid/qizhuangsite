import { TestBed, inject } from '@angular/core/testing';

import { TradeSystemService } from './trade-system.service';

describe('TradeSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeSystemService]
    });
  });

  it('should be created', inject([TradeSystemService], (service: TradeSystemService) => {
    expect(service).toBeTruthy();
  }));
});
