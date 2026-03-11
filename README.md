QA Assessment - General Readme
Tool: Cypress 15.x

This repository contains the resolution of the QA Assessment:
  Section 1: E2E Test Automation (Option 2 - Saucedemo)
  Section 2: API Test Automation (Option 2 - Petstore)

Project structure
QA_ASSESSMENT/
├── cypress/
│   ├── e2e/
│   │   ├── api_tests/
│   │   │   └── petStore.cy.js
│   │   └── e2e_tests/
│   │       └── saucedemoPurchase.cy.js
│   ├── fixtures/
│   │   └── user.json
│   ├── pages/
│   │   ├── CheckoutPage.js
│   │   ├── InventoryPage.js
│   │   └── LoginPage.js
│   ├── reports/
│   └── support/
├── docs/
│   ├── e2e_readme.txt
│   ├── e2e_conclusions.txt
│   ├── api_readme.txt
│   └── api_conclusions.txt
├── cypress.config.js
└── package.json

Requirements
- Node.js >= 18.x  (how to check: node -v)
- npm >= 9.x       (how to check: npm -v)
- Internet connection

Installation
1. Clone the repository:
   git clone <REPOSITORY_URL>
2. Install dependencies:
   npm install

How to run
  All tests:       npx cypress run
  E2E only:        npm run test:e2e
  API only:        npm run test:api
  Interactive:     npx cypress open

Documentation
Each exercise has its own readme and conclusions inside /docs:
  E2E: docs/e2e_readme.txt  |  docs/e2e_conclusions.txt
  API: docs/api_readme.txt  |  docs/api_conclusions.txt