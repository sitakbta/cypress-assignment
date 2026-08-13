class InventoryPage {
    elements = {
      // Button to add the Onesie product to the cart 
      addtToCartBtn: () => cy.get('#add-to-cart-sauce-labs-onesie'),
      // Link/icon to go to the cart page
      cartLink: () => cy.get('.shopping_cart_link')
      }

      // Click the Add to Cart button for the target product
      addItemToCart() {
        this.elements.addtToCartBtn().click()
      }

      // Click the cart icon to navigate to the cart page
      goToCart() {
        this.elements.cartLink().click()
      }
}

export default InventoryPage