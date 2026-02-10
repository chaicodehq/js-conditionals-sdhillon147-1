/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0) {
    return null;
  }
  if (
    !Number.isInteger(serviceRating) ||
    serviceRating < 1 ||
    serviceRating > 5
  ) {
    return null;
  }

  let tipAmount = 0;
  let totalAmount = 0;
  let tipPercentage = 0;

  let ratingToTip = [5, 10, 15, 20, 25];

  tipAmount = (billAmount * ratingToTip[serviceRating - 1]) / 100;
  totalAmount = tipAmount + billAmount;
  tipPercentage = ratingToTip[serviceRating - 1];

  // const tipRateForRatingOne = 5;
  // const tipRateForRatingTwo = 10;
  // const tipRateForRatingThree = 15;
  // const tipRateForRatingFour = 20;
  // const tipRateForRatingFive = 25;

  // if (serviceRating === 1) {
  //   tipAmount = (billAmount * tipRateForRatingOne) / 100;
  //   tipPercentage = tipRateForRatingOne;
  // } else if (serviceRating === 2) {
  //   tipAmount = (billAmount * tipRateForRatingTwo) / 100;
  //   tipPercentage = tipRateForRatingTwo;
  // } else if (serviceRating === 3) {
  //   tipAmount = (billAmount * tipRateForRatingThree) / 100;
  //   tipPercentage = tipRateForRatingThree;
  // } else if (serviceRating === 4) {
  //   tipAmount = (billAmount * tipRateForRatingFour) / 100;
  //   tipPercentage = tipRateForRatingFour;
  // } else {
  //   tipAmount = (billAmount * tipRateForRatingFive) / 100;
  //   tipPercentage = tipRateForRatingFive;
  // }

  // totalAmount = tipAmount + billAmount;

  return {
    tipPercentage: Number(tipPercentage.toFixed(2)),
    tipAmount: Number(tipAmount.toFixed(2)),
    totalAmount: Number(totalAmount.toFixed(2)),
  };
}
