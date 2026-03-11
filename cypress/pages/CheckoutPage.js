class CheckoutPage {
    get checkoutButton()      { return cy.get('[data-test="checkout"]') }
    get firstNameInput()      { return cy.get('[data-test="firstName"]') }
    get lastNameInput()       { return cy.get('[data-test="lastName"]') }
    get postalCodeInput()     { return cy.get('[data-test="postalCode"]') }
    get continueButton()      { return cy.get('[data-test="continue"]') }
    get finishButton()        { return cy.get('[data-test="finish"]') }
    get confirmationHeader()  { return cy.get('[data-test="complete-header"]') }
    get confirmationText()    { return cy.get('[data-test="complete-text"]') }
    get cartItems()           { return cy.get('.cart_item') }
    get summaryTotal()        { return cy.get('.summary_total_label') }
    get errorMessage()        { return cy.get('[data-test="error"]') }

    clickCheckout() {
        this.checkoutButton.click()
        return this
    }

    fillFirstName(value) {
        this.firstNameInput.clear().type(value)
        return this
    }

    fillLastName(value) {
        this.lastNameInput.clear().type(value)
        return this
    }

    fillPostalCode(value) {
        this.postalCodeInput.clear().type(value)
        return this
    }

    fillShippingInfo(firstName, lastName, postalCode) {
        this.fillFirstName(firstName)
        this.fillLastName(lastName)
        this.fillPostalCode(postalCode)
        return this
    }

    clickContinue() {
        this.continueButton.click()
        return this
    }

    clickFinish() {
        this.finishButton.click()
        return this
    }

    verifyCartItemCount(count) {
        this.cartItems
        .should('have.length', count)
        return this
    }

    verifyOnCartPage() {
        cy.url().should('include', '/cart.html')
        return this
    }

    verifyOnCheckoutStepOne() {
        cy.url().should('include', '/checkout-step-one.html')
        return this
    }

    verifyOnCheckoutStepTwo() {
        cy.url().should('include', '/checkout-step-two.html')
        this.summaryTotal.should('be.visible')
        return this
    }

    verifyOrderConfirmation() {
        cy.url().should('include', '/checkout-complete.html')
        this.confirmationHeader
        .should('be.visible')
        .and('contain', 'Thank you for your order!')
        this.confirmationText.should('be.visible')
        cy.screenshot('order-completed')
        return this
    }

    verifyFormError(expectedMessage) {
        this.errorMessage
        .should('be.visible')
        .and('contain', expectedMessage)
        return this
    }
}

export default new CheckoutPage()
