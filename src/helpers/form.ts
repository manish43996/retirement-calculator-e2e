export async function type(el: WebdriverIO.Element, value: string | number) {
  await el.waitForDisplayed();
  await el.clearValue();
  await el.setValue(String(value));
}