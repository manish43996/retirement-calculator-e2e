class CalculatorPage {
  get currentAge() { return $('[data-testid="current-age"]'); }
  get retirementAge() { return $('[data-testid="retirement-age"]'); }
  get currentIncome() { return $('[data-testid="current-income"]'); }
  get spouseIncome() { return $('[data-testid="spouse-income"]'); }
  get currentSavings() { return $('[data-testid="current-savings"]'); }
  get contribPct() { return $('[data-testid="contrib-pct"]'); }
  get contribIncreasePct() { return $('[data-testid="contrib-increase-pct"]'); }

  get ssToggleYes() { return $('[data-testid="ss-toggle-yes"]'); }
  get ssToggleNo() { return $('[data-testid="ss-toggle-no"]'); }
  get relationshipStatus() { return $('[data-testid="relationship-status"]'); }
  get ssOverride() { return $('[data-testid="ss-override"]'); }

  get otherIncome() { return $('[data-testid="other-income"]'); }
  get yearsRetired() { return $('[data-testid="years-retired"]'); }
  get inflationYes() { return $('[data-testid="inflation-yes"]'); }
  get inflationNo() { return $('[data-testid="inflation-no"]'); }
  get finalIncomePct() { return $('[data-testid="final-income-pct"]'); }
  get preReturnPct() { return $('[data-testid="pre-return-pct"]'); }
  get postReturnPct() { return $('[data-testid="post-return-pct"]'); }

  get submitBtn() { return $('[data-testid="calculate-btn"]'); }
  get resultsPanel() { return $('[data-testid="results"]'); }
  get errorMessages() { return $$('[data-testid="field-error"]'); }

  async open() { await browser.url('/'); }

  async submit() { await this.submitBtn.click(); }

  async expectResultsVisible() {
    await expect(this.resultsPanel).toBeDisplayed();
  }
}
export default new CalculatorPage();