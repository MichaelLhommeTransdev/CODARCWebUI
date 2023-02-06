import { TestBed } from '@angular/core/testing';

import { DocumentationStore } from './documentation-store.service';

describe('DocumentationStore', () => {
  let service: DocumentationStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentationStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
