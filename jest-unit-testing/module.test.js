import Portfolio from './module.js';

let p;

p = new Portfolio();

test('Testing createPortfolio-- success', () => {
  const expected = [];
  const got = p.createPortfolio();
  expect(got).toStrictEqual(expected);
});

test('Testing isEmpty-- success', () => {
  const got = p.isEmpty();
  expect(got).toBe(true);
});

test('Testing count-- success', () => {
  const got = p.count();
  expect(got).toBe(0);
});

test('Testing purchase-- success', () => {
  const expected = [["AAPL", 10]];
  const got = p.purchase("AAPL", 10);
  expect(got).toStrictEqual(expected);
});

test('Testing purchase 2-- success', () => {
  const expected = "Invalid number of stocks";
  const got = p.purchase("FAIL", -2);
  expect(got).toStrictEqual(expected);
});

test('Testing sale 1 -- success', () => {
  console.log(p.portfolio)
  const expected = [["AAPL", 7]];
  const got = p.sale("AAPL", 3);
  expect(got).toEqual(expected);
});

test('Testing sale 3 -- success', () => {
  const expected = "ShareSaleException";
  expect(() => p.sale("AAPL", 12)).toThrow(expected);
});


test('Testing sale 2 -- success', () => {
  const expected = [];
  const got = p.sale("AAPL", 7);
  expect(got).toEqual(expected);
});

