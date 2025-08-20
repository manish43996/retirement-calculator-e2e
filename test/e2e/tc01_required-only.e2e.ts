import Page from '../../src/pages/Calculator.page';
import { type } from '../../src/helpers/form';
import { requiredOnly } from '../../src/data/sampleData';

describe('TC-01 submit with required fields', () => {
  it('should submit successfully', async () => {
    await Page.open();
    await type(Page.currentAge, requiredOnly.currentAge);
    await type(Page.retirementAge, requiredOnly.retirementAge);
    await type(Page.currentIncome, requiredOnly.currentIncome);
    await type(Page.currentSavings, requiredOnly.currentSavings);
    await type(Page.contribPct, requiredOnly.contribPct);
    await type(Page.contribIncreasePct, requiredOnly.contribIncreasePct);
    await type(Page.yearsRetired, requiredOnly.yearsRetired);
    await type(Page.finalIncomePct, requiredOnly.finalIncomePct);
    await type(Page.preReturnPct, requiredOnly.preReturnPct);
    await type(Page.postReturnPct, requiredOnly.postReturnPct);

    await Page.ssToggleNo.click(); // SS disabled

    await Page.submit();
    await Page.expectResultsVisible();
    await expect(Page.errorMessages).toBeElementsArrayOfSize(0);
  });
});