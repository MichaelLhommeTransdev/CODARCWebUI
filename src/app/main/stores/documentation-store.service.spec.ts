import { TestBed } from '@angular/core/testing';

import { DocumentationStoreService } from './documentation-store.service';

describe('DocumentationStoreService', () => {
  let service: DocumentationStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentationStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
