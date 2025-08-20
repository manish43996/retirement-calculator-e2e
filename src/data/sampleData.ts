export const requiredOnly = {
  currentAge: 40,
  retirementAge: 68,
  currentIncome: 100000,
  currentSavings: 500000,
  contribPct: 10,
  contribIncreasePct: 0.25,
  yearsRetired: 20,
  finalIncomePct: 75,
  preReturnPct: 8,
  postReturnPct: 5
};

export const withAllFields = {
  ...requiredOnly,
  spouseIncome: 75000,
  ssIncome: true,
  relationship: 'Married',
  ssOverride: 4000,
  otherIncome: 500,
  inflation: true
};