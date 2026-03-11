class LoginPage {

    get usernameInput()  { return cy.get('#user-name') }
    get passwordInput()  { return cy.get('#password') }
    get loginButton()    { return cy.get('#login-button') }
    get errorMessage()   { return cy.get('[data-test="error"]') }

    visit() {
        cy.visit('/')
        return this
    }

    typeUsername(username) {
        this.usernameInput.clear().type(username)
        return this
    }

    typePassword(password) {
        this.passwordInput.clear().type(password)
        return this
    }

    clickLogin() {
        this.loginButton.click()
        return this
    }

    login(username, password) {
        this.visit()
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
        return this
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html')
        return this
    }

    verifyLoginError(expectedMessage) {
        this.errorMessage
            .should('be.visible')
            .and('contain', expectedMessage)
        return this
    }
}

export default new LoginPage()