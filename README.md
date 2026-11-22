# Playwright & TypeScript Test Automation Framework

End-to-end UI and REST API test automation framework built with Playwright and TypeScript, structured around the Page Object Model (POM) pattern.

## Project Structure

- `pages/` - Page Object classes encapsulating locators and page actions
- `tests/ui/` - End-to-end browser tests (authentication, validation flows)
- `tests/api/` - REST API verification tests (status codes, payload & schema assertions)
- `.github/workflows/` - GitHub Actions CI pipeline for automated test execution

## Setup & Execution

Install dependencies and browser binaries:
```bash
npm install
npx playwright install chromium
```

Run all tests:
```bash
npm test
```

Run specific test suites:
```bash
npm run test:ui
npm run test:api
```

View HTML test report:
```bash
npm run report
```
