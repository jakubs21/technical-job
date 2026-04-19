# FashionHub Playwright Tests

This project contains automated UI tests for the FashionHub application using Playwright.

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests (default environment: prod):

```bash
npm test
```

---

## Environment Configuration

The test environment is controlled using the TEST_ENV variable.

This project uses cross-env to support environment variables across Windows, Linux, and MacOS.

Available environments:
- local
- staging
- prod

Run tests in specific environment:

```bash
npm run test:local
npm run test:staging
npm run test:prod
```

---

## Browser Execution

Run all configured browsers:

```bash
npx playwright test
```

Run specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## Allure Report

Run tests (generates Allure results):

```bash
npm test
```

Generate Allure report:

```bash
npx allure generate allure-results -o allure-report --clean
```

Open Allure report:

```bash
npx allure open allure-report
```

---

## Project Structure

```bash
tests/        - Test specifications
pages/        - Page Object Models
config/       - Environment configuration
fixtures/     - Test data
```

---

## Key Features

- Page Object Model (POM) architecture
- Environment-based configuration using TEST_ENV
- Cross-browser testing support
- Allure reporting integration
- Playwright test runner
