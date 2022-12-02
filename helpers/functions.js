import { useState, useEffect } from 'react';


// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


/**
 * Format number in currency.
 *
 * @param {number} amount The value to format as a price.
 * @param {string|false|null} currency The currency to show or false to skip.
 * @param {boolean} showFractions True to show fraction digits, false othwerwise.
 *
 * @returns {string} The formatted price, with currency suffix.
 */
export const currencyFormat = (
  amount,
  currency = 'rsd',
  showFractions = true
) => {
  // Guard: no amount
  if (amount == null || isNaN(amount)) {
    return '-'
  }

  // Number of digits to show after the decimal places
  const decimalDigits = showFractions ? 2 : 0

  // Summarize options
  const options = {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  }

  // Format to two decimal places
  const price = new Intl.NumberFormat('de-DE', options).format(amount)
  const currencyLabel = currency?.toLocaleUpperCase() ?? ''

  return `${price} ${currencyLabel}`.trim()
}
