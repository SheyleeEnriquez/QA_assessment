API Automation Exercise - Petstore
Tool: Cypress
API: https://petstore.swagger.io

Description
Automated tests for the Petstore REST API covering the main
pet management operations: create, retrieve, update and search.

Endpoints tested
  POST /pet              Add a new pet
  GET /pet/{petId}       Find a pet by ID
  PUT /pet               Update an existing pet
  GET /pet/findByStatus  Find pets by status

Test scenarios
1. Create a pet and validate the full response contract
2. POST with empty body - behavior validation (bug documented)
3. Retrieve the created pet by ID
4. GET with non-numeric ID - error handling validation
5. Update the pet name and status to "sold"
6. Confirm the update persisted with a subsequent GET
7. PUT with non-existent ID - behavior validation (bug documented)
8. Search for pets with status "sold" and verify the updated pet appears
9. Search with an invalid status value - behavior validation
10. Search for pets with status "available"

Data generation
A unique petId is generated with Date.now() before the suite runs
to avoid conflicts between executions.

Data cleanup
An after() hook deletes the created pet at the end of the suite.
An afterEach() hook logs the name of any failed test for traceability.

How to run
  Install dependencies:  npm install
  Headless:              npx cypress run --spec "cypress/e2e/api_tests/petStore.cy.js"
  All tests:             npx cypress run
    
  Or using the package.json script:
  npm run test:api