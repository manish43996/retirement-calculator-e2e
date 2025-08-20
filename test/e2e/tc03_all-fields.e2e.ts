import Page from '../../src/pages/Calculator.page';
import { type } from '../../src/helpers/form';
import { withAllFields } from '../../src/data/sampleData';

describe('TC-03 submit with all fields', () => {
  it('should submit successfully with full data', async () => {
    await Page.open();
    await type(Page.currentAge, withAllFields.currentAge);
    await type(Page.retirementAge, withAllFields.retirementAge);
    await type(Page.currentIncome, withAllFields.currentIncome);
    await type(Page.spouseIncome, withAllFields.spouseIncome!);
    await type(Page.currentSavings, withAllFields.currentSavings);
    await type(Page.contribPct, withAllFields.contribPct);
    await type(Page.contribIncreasePct, withAllFields.contribIncreasePct);
    await Page.ssToggleYes.click();
    await Page.relationshipStatus.selectByVisibleText(withAllFields.relationship!);
    await type(Page.ssOverride, withAllFields.ssOverride!);
    await type(Page.otherIncome, withAllFields.otherIncome!);
    await type(Page.yearsRetired, withAllFields.yearsRetired);
    (withAllFields.inflation ? Page.inflationYes : Page.inflationNo).click();
    await type(Page.finalIncomePct, withAllFields.finalIncomePct);
    await type(Page.preReturnPct, withAllFields.preReturnPct);
    await type(Page.postReturnPct, withAllFields.postReturnPct);

    await Page.submit();
    await Page.expectResultsVisible();
  });
});