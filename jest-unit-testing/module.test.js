import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.two_digit_calc("12+18");
  expect(got).toBe(expected);
});

test('Testing sub -- success', () => {
  const expected = 30;
  const got = mut.two_digit_calc("43-13");
  expect(got).toBe(expected);
});

test('Testing mult -- success', () => {
  const expected = 30;
  const got = mut.two_digit_calc("03*10");
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 30;
  const got = mut.two_digit_calc("90/03");
  expect(got).toBe(expected);
});

test('Testing wrong operator -- success', () => {
  const expected = NaN;
  const got = mut.two_digit_calc("12{08");
  expect(got).toBe(expected);
});

test('Testing wrong string length -- success', () => {
  const expected = NaN;
  const got = mut.two_digit_calc("12{081");
  expect(got).toBe(expected);
});

test('Testing non number input -- success', () => {
  const expected = NaN;
  const got = mut.two_digit_calc("a1+23");
  expect(got).toBe(expected);
});