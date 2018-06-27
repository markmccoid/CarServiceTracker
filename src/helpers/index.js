import numeral from 'numeral';

export const formatAmount = (amount, type = '$') => {
  //type is either $ or #.
  //$ returns formatted with $
  //# returns number converted from pennies to dollars
  const convertedAmount = amount / 100
  if (type === '$') {
    return numeral(convertedAmount).format('$0,0.00');
  }
  return convertedAmount;
}