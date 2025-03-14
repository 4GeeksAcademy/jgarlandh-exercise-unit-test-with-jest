const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./currencyConverter');

// Prueba para fromDollarToYen
test('Convierte 100 USD a JPY', () => {
  expect(fromDollarToYen(100)).toBeCloseTo(14285.71); // 100 / 0.007 ≈ 14285.71
});

// Prueba para fromEuroToDollar
test('Convierte 100 EUR a USD', () => {
  expect(fromEuroToDollar(100)).toBeCloseTo(107); // 100 * 1.07 = 107
});

// Prueba para fromYanToPound
test('Convierte 1000 JPY a GBP', () => {
  expect(fromYanToPound(1000)).toBeCloseTo(5.56); // (1000 * 0.007) / 1.26 ≈ 5.56
});