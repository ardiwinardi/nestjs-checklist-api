import { BadRequestException } from '@nestjs/common';
import { ParseObjectIdPipe } from './parse-object-id.pipe';

describe('ParseObjectIdPipe', () => {
  let pipe: ParseObjectIdPipe;

  beforeEach(() => {
    pipe = new ParseObjectIdPipe();
  });

  it('should be defined', () => {
    expect(new ParseObjectIdPipe()).toBeDefined();
  });

  it('should throw error for non valid object id', () => {
    const value = () => pipe.transform(`hello`);
    expect(value).toThrowError(BadRequestException);
  });
});
