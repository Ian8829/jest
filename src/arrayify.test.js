// arrayify() -> []
// arrayify('hello') -> ['hello']
// arrayify([1, 2, 3]) -> [1, 2, 3]

import { arrayify } from './arrayify';

test('returns an empty array when given nothing', () => {
	const result = arrayify();
	expect(result).toEqual([]);
});

test('returns the array-ed version of what it is given', () => {
	const input = 'hi there';
	const result = arrayify(input);
	expect(result).toEqual([input]);
});

test('returns the array if it is given an array', () => {
	const input = [1, 2, 3];
	const result = arrayify(input);
	expect(result).toEqual(input);
});


// if you want to jest watch // jest --watch

//  run just last test // jest --watch --last