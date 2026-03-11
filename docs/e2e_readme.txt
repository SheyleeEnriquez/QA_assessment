E2E Automation Exercise - Saucedemo
Tool: Cypress
Site: https://www.saucedemo.com

Description
This exercise automates the purchase flow on SauceDemo using Cypress
structured with the Page Object Model pattern.

Test scenarios
1. Successful login
2. Add two products to the cart
3. View cart contents
4. Complete the checkout form
5. Confirm order - "Thank you for your order"
6. Negative case: empty checkout form shows validation error

Requirements
- Node.js >= 18.x
- npm install (installs Cypress automatically)

How to run
  Interactive:  npx cypress open
  Headless:     npx cypress run --spec "cypress/e2e/e2e_tests/saucedemoPurchase.cy.js"
  All tests:             npx cypress run
  
  Or using the package.json script:
  npm run test:e2e

Test data
Credentials and form data are in cypress/fixtures/user.json
  username: standard_user
  password: secret_sauce