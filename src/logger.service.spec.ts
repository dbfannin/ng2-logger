/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NG2Logger } from './logger.service';

describe('NG2Logger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NG2Logger]
    });
  });

  it('should ...', inject([NG2Logger], (service: NG2Logger) => {
    expect(service).toBeTruthy();
  }));
});
