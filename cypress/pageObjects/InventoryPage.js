class InventoryPage {
    elements = {
      // Button to add the Onesie product to the cart 
      addtToCartBtn: () => cy.get('#add-to-cart-sauce-labs-onesie'),
      // Link/icon to go to the cart page
      cartLink: () => cy.get('.shopping_cart_link')
      }

      addItemToCart() {
        // Click the Add to Cart button for the target product
        this.elements.addtToCartBtn().click()
      }

      goToCart() {
        // Click the cart icon to navigate to the cart page
        this.elements.cartLink().click()
      }
}

export default InventoryPage