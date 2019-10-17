import { TestBed } from '@angular/core/testing';

import { NewsapiService } from '../services/newsapi.service';

describe('NewsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsapiService = TestBed.get(NewsapiService);
    expect(service).toBeTruthy();
  });
});
