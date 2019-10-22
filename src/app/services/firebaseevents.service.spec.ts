import { TestBed } from '@angular/core/testing';

import { FirebaseeventsService } from './firebaseevents.service';

describe('FirebaseeventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseeventsService = TestBed.get(FirebaseeventsService);
    expect(service).toBeTruthy();
  });
});
