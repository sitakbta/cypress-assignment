import LoginPage from '../pageObjects/LoginPage'
import InventoryPage from '../pageObjects/InventoryPage'
import CartPage from '../pageObjects/CartPage'

describe('Sauce Demo Tests', () => {
  const loginpage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()
  
  beforeEach(() => {
    // Navigate to the Sauce Demo login page before each test
    cy.visit('https://saucedemo.com')
  })

  it('Successful Login', () => {
    // Load credentials from fixtures and perform a valid login
    cy.fixture('users').then((my_users) => {
      loginpage.login(my_users.validUser.username, my_users.validUser.password)
      })
      // Verify user is redirected to the Inventory page
      cy.get('[data-test="title"]').should('have.text', 'Products')
  })

  it('Invalid Login', () => {
    // Attempt login with invalid credentials from fixtures
    cy.fixture('users').then((my_users) => {
      loginpage.login(my_users.invalidUser.username, my_users.invalidUser.password)
      })
      // Verify the appropriate error message is shown
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
      cy.log('User is not logged in')
           
  })
 
  it('Add Item to Cart', () => {
    // Login with valid user, add the product to cart and verify in cart
    cy.fixture('users').then((my_users) => {
      loginpage.login(my_users.validUser.username, my_users.validUser.password)
      })

      // Add the Sauce Labs Onesie to cart from inventory
      inventoryPage.addItemToCart()
      
      // Navigate to the cart page
      inventoryPage.goToCart()
      
      // Verify cart contains the expected item
      cartPage.verifyItemName('Sauce Labs Onesie')
      
      // Intentional failure: site price is $7.99 but we assert $9.99 per requirement
      cartPage.verifyItemPrice('$9.99')
     })
})