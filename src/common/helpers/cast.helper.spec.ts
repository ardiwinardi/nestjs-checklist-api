import { toBoolean } from './cast.helper';

describe('toBoolean', () => {
  it('should return false when pass 2', () => {
    expect(toBoolean('2')).toBeFalsy();
  });

  it('should return false when input char', () => {
    expect(toBoolean('a')).toBeFalsy();
  });
});
