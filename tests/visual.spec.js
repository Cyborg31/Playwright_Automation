const { test, expect } = require('@playwright/test');

test('Snapshot Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/abtest');

  // If less than 5% of the pixels changed, it's fine.
  await expect(page).toHaveScreenshot('main-page.png', {
    maxDiffPixelRatio: 0.05 
  });
});