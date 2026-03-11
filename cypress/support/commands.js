// ***********************************************
// Custom Cypress Commands
// ***********************************************

/**
 * Login command
 * Uses localStorage to set auth state directly 
 */
Cypress.Commands.add('loginByStorage', (username, password) => {
  cy.session(
    [username, password],
    () => {
      cy.visit('/')
      cy.get('#user-name').type(username)
      cy.get('#password').type(password)
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
    },
    {
      validate() {
        cy.getCookie('session-username').should('exist')
      }
    }
  )
})
