import { describe, it, expect } from 'vitest';
import '../src/index';

describe('Array.prototype.css', () => {
  it('joins non-empty strings into a single space-separated string', () => {
    const classes = ['btn', 'btn-primary', 'active'];
    expect(classes.css()).toBe('btn btn-primary active');
  });

  it('returns null when all elements are empty or whitespace', () => {
    const emptyClasses = ['', ' '];
    expect(emptyClasses.css()).toBeNull();
  });

  it('coerces non-string items to strings', () => {
    const items = [1, true, null, undefined];
    expect(items.css()).toBe('1 true null undefined');
  });

  it('handles an empty array', () => {
    const nothing: string[] = [];
    expect(nothing.css()).toBeNull();
  });
});
