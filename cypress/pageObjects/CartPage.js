class CartPage {
    elements = {
        // Cart item name inside the cart page
        cartItemName: () => cy.get('.cart_item .inventory_item_name'),
        // Cart item price inside the cart page
        cartItemPrice: () => cy.get('.cart_item .inventory_item_price'),
        // Checkout button on the cart page
        checkoutBtn: () => cy.get('[data-test="checkout"]')
    }

    verifyItemName(expected) {
        // Assert the cart contains the expected product name
        this.elements.cartItemName().should('contain', expected)
    }

    verifyItemPrice(expectedPrice) {
        // Assert the cart item price matches the expected price
        this.elements.cartItemPrice().should('contain', expectedPrice)
    }

    proceedToCheckout() {
        // Proceed to the checkout flow
        this.elements.checkoutBtn().click()
    }
}

export default CartPage