import Page from '../../src/pages/Calculator.page';

describe('TC-02 SS toggle show/hide', () => {
  it('should show and hide SS fields', async () => {
    await Page.open();
    await Page.ssToggleYes.click();
    await expect(Page.relationshipStatus).toBeDisplayed();
    await expect(Page.ssOverride).toBeDisplayed();

    await Page.ssToggleNo.click();
    await expect(Page.relationshipStatus).not.toBeDisplayed();
    await expect(Page.ssOverride).not.toBeDisplayed();
  });
});