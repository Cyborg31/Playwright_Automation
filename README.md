![Playwright Tests](https://github.com/Cyborg31/Playwright_Automation/actions/workflows/playwright.yml/badge.svg)

# 🎭 Playwright Visual & Cross-Browser Suite

Automation framework featuring **Visual Regression Testing**, **Cross-Browser Verification**, and **CI/CD Pipelines**.

---

## 🌟 Features
- **Visual Testing:** AI-powered pixel comparison for UI consistency.
- **Cross-Browser:** Verified on Chromium, Firefox, and Safari (Webkit).
- **Docker Ready:** Optimized for running Webkit on Linux.
- **CI/CD:** Automated via GitHub Actions.

---

## 📸 Visual Regression Workflow

This project utilizes a "Snapshot" comparison strategy:

1.  **First Run (Baseline):** Playwright captures a "Gold Standard" image of the UI and saves it in the snapshots folder.
**Note:** You will see an **Error** on the very first run! This is normal. Playwright fails because it has no "Gold Standard" image to compare against yet. It will automatically create the baseline images for you during this "failed" run.
2.  **Consecutive Runs:** Every new test run compares the live UI against the Baseline. If pixels differ by more than the defined threshold (**5%**), the test fails.
3.  **Updating:** If a UI change is intentional, run the update command to refresh the Baseline snapshots.

---

## 🚀 Quick Start

### 1. Install
```bash
git clone https://github.com/Cyborg31/Playwright_Automation.git
cd Playwright_Automation
npm install
npx playwright install --with-deps
```
---

### 2. Run Tests

| Command | Action |
| :--- | :--- |
| `npm run test:all` | Run all browsers (Chromium, Firefox, Webkit) |
| `npx playwright test --ui` | Open Playwright UI Mode for debugging |
| `npx playwright test --update-snapshots` | Refresh "Gold Standard" visual images |

### 🔧 Linux/Docker Fix

If you face permission issues (EACCES) after running Webkit in Docker, run:

```bash
sudo chown -R $USER:$USER .
```

### 📊 CI/CD Status

Tests are automatically executed via GitHub Actions on every push. View logs in the Actions tab.