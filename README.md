# SauceDemo Cypress Automation Tests

## Student Information

- Student: Sita Karumudi
- Assignment: Cypress Assignment


This repository contains Cypress tests for the Sauce Demo site (https://www.saucedemo.com). It demonstrates three E2E tests implemented using a simple Page Object Model (POM):

- Successful Login
- Invalid Login
- Add Item to Cart (intentional failing price assertion)

Project layout
- `cypress/e2e/SauceDemoTests.cy.js` — test spec implementing the three tests.
- `cypress/pageObjects/` — POM classes: `LoginPage.js`, `InventoryPage.js`, `CartPage.js`.
- `cypress/fixtures/users.json` — test credentials.
- `cypress/screenshots/` — test screenshots produced by Cypress. See the failing test screenshot below.

Prerequisites
- Node.js (16+) and npm installed

Install
```bash
npm install
```

Run tests

- Open the Cypress Test Runner (interactive):

```bash
npx cypress open
```

- Run the spec headlessly:

```bash
npx cypress run --spec "cypress/e2e/SauceDemoTests.cy.js"
```

Note for Windows / PowerShell
- If PowerShell blocks execution of `npx`, run the command from Command Prompt, or use `npx.cmd`:

```powershell
npx.cmd cypress run --spec "cypress/e2e/SauceDemoTests.cy.js"
```

What the tests do
- `Successful Login`: navigates to the login page, enters valid credentials from `cypress/fixtures/users.json`, and verifies the inventory page loads.
- `Invalid Login`: attempts login with invalid credentials and verifies the error message.
- `Add Item to Cart`: logs in, adds the `Sauce Labs Onesie` to cart, navigates to cart and verifies the item and price. Per request this test intentionally asserts a wrong price (`$9.99`) while the site shows `$7.99` so the test will fail and produce a screenshot.

Failure screenshot

The failing Add Item to Cart test produced a screenshot. You can view it here:

![Add Item to Cart - Failure (original name)](cypress/screenshots/SauceDemoTests.cy.js/Sauce%20Demo%20Tests%20--%20Add%20Item%20to%20Cart%20%28failed%29.png)

Customizing the intentional failure
- To make the Add-to-cart test pass, update the assertion in `cypress/e2e/SauceDemoTests.cy.js` from `'$9.99'` to `'$7.99'` or update the POM method used for verification.

Notes
- Tests were written using Cypress v15 (see `package.json` devDependencies). If you upgrade Cypress, re-run `npm install`.
- Screenshots and videos are saved to `cypress/screenshots` and `cypress/videos` by default.
