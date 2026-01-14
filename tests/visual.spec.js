const { test, expect } = require('@playwright/test');

test('Visual Snapshot - Stable Cross Browser', async ({ page }) => {
  // Force deterministic viewport
  await page.setViewportSize({ width: 1280, height: 720 });

  // Navigate
  await page.goto('https://the-internet.herokuapp.com/abtest', {
    waitUntil: 'domcontentloaded',
  });

  // Wait for fonts & layout
  await page.evaluate(() => document.fonts.ready);

  const heading = page.locator('h3');
  await expect(heading).toBeVisible();

  // Small render buffer
  await page.waitForTimeout(300);

  // Intentional visual change (to demonstrate diff)
  await page.evaluate(() => {
    const el = document.querySelector('h3');
    el.style.color = 'blue';
    el.textContent = 'UI Color';
  });

  // Visual assertion
  await expect(page).toHaveScreenshot('heading-baseline.png', {
    animations: 'disabled',
    maxDiffPixelRatio: 0.05, // 5% threshold to ignore font differences between local gold image and github runner generated image
  });
});
