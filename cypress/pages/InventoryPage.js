class InventoryPage {

    get cartIcon()         { return cy.get('.shopping_cart_link') }
    get cartBadge()        { return cy.get('.shopping_cart_badge') }
    get inventoryItems()   { return cy.get('.inventory_item') }
    
    addToCartBtn(productTestId) {
        return cy.get(`[data-test="add-to-cart-${productTestId}"]`)
    }

    addBackpack() {
        this.addToCartBtn('sauce-labs-backpack').click()
        return this
    }

    addBoltTShirt() {
        this.addToCartBtn('sauce-labs-bolt-t-shirt').click()
        return this
    }

    goToCart() {
        this.cartIcon.click()
        return this
    }

    verifyCartBadge(count) {
        this.cartBadge
        .should('be.visible')
        .and('have.text', String(count))
        return this
    }

    verifyOnInventoryPage() {
        cy.url().should('include', '/inventory.html')
        cy.get('.inventory_list').should('be.visible')
        return this
    }    
}

export default new InventoryPage()