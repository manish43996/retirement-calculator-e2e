import Page from '../../src/pages/Calculator.page';
import { type } from '../../src/helpers/form';

describe('TC-04 update default calculator values', () => {
  it('should use updated values in results', async () => {
    await Page.open();

    // Read a number from results after first submit (if defaults auto-calc, skip)
    await type(Page.currentAge, 35);
    await type(Page.retirementAge, 65);
    await Page.ssToggleNo.click();
    await Page.submit();
    await Page.expectResultsVisible();
    const firstSnapshot = await Page.resultsPanel.getText();

    // Change defaults and resubmit; expect results to change
    await type(Page.currentAge, 45);
    await type(Page.retirementAge, 70);
    await Page.submit();
    await Page.expectResultsVisible();
    const secondSnapshot = await Page.resultsPanel.getText();

    expect(secondSnapshot).not.toEqual(firstSnapshot);
  });
});