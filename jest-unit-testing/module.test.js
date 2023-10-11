import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 5;
    const got = mut.div(30, 6);
    expect(got).toBe(expected);
  });

test('Testing containsNumbers -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("ajslkfjaslñdfj");
    expect(got).toBe(expected);
  });

test('Testing containsNumbers -- success', () => {
    const expected = false;
    const got = mut.containsNumbers(" ");
    expect(got).toBe(expected);
  });