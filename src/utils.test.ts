import { test, expect } from 'vitest';
import { add } from './utils.js';

test('add tests', () => {
  expect(add(1, 2)).toBe(3);
});
