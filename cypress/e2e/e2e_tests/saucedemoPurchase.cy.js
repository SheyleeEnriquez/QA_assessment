import LoginPage     from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CheckoutPage  from '../../pages/CheckoutPage'

describe('Saucedemo - Purchase Flow', () => {

  let user

  before(() => {
    cy.fixture('user').then((data) => { user = data })
  })

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      LoginPage.login(data.username, data.password)
    })

  })

  // ─── Happy Path ────────────────────────────────────────

  it('Should display the inventory page after login', () => {
    InventoryPage.verifyOnInventoryPage()
    InventoryPage.inventoryItems.should('have.length.at.least', 1)
  })

  it('Should add two products and reflect count in cart badge', () => {
    InventoryPage
      .addBackpack()
      .addBoltTShirt()
      .verifyCartBadge(2)
  })

  it('Should display added products in the cart', () => {
    InventoryPage.addBackpack().addBoltTShirt()
    InventoryPage.goToCart()

    CheckoutPage
      .verifyOnCartPage()
      .verifyCartItemCount(2)
  })

  it('Should complete full purchase and show order confirmation', () => {
    InventoryPage.addBackpack().addBoltTShirt()

    InventoryPage.goToCart()
    CheckoutPage.verifyOnCartPage().verifyCartItemCount(2)

    CheckoutPage
      .clickCheckout()
      .verifyOnCheckoutStepOne()
      .fillShippingInfo(user.firstName, user.lastName, user.postalCode)
      .clickContinue()

    CheckoutPage
      .verifyOnCheckoutStepTwo()
      .clickFinish()

    CheckoutPage.verifyOrderConfirmation()
  })

  // ─── Negative Case ──────────────────────────────────────

  it('Should show error when checkout form is submitted empty', () => {
    InventoryPage.addBackpack()
    InventoryPage.goToCart()

    CheckoutPage
      .clickCheckout()
      .clickContinue()
      .verifyFormError('First Name is required')
  })

})