// Definimos las tasas de cambio (valores ficticios para el ejemplo)
const exchangeRates = {
    USD: 1,       // Dólar estadounidense
    EUR: 1.07,    // Euro (1 EUR = 1.07 USD)
    JPY: 0.007,   // Yen japonés (1 JPY = 0.007 USD)
    GBP: 1.26,    // Libra esterlina (1 GBP = 1.26 USD)
  };
  
  // Función para convertir de dólares a yenes
  const fromDollarToYen = (amountInDollars) => {
    const amountInYen = amountInDollars / exchangeRates.JPY;
    return parseFloat(amountInYen.toFixed(2)); // Redondeamos a 2 decimales
  };
  
  // Función para convertir de euros a dólares
  const fromEuroToDollar = (amountInEuros) => {
    const amountInDollars = amountInEuros * exchangeRates.EUR;
    return parseFloat(amountInDollars.toFixed(2)); // Redondeamos a 2 decimales
  };
  
  // Función para convertir de yenes a libras
  const fromYanToPound = (amountInYen) => {
    const amountInPounds = (amountInYen * exchangeRates.JPY) / exchangeRates.GBP;
    return parseFloat(amountInPounds.toFixed(2)); // Redondeamos a 2 decimales
  };
  
  // Exportamos las funciones
  module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };