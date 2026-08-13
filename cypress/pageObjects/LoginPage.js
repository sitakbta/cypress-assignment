class LoginPage {
    elements = { 
        // Input field for username
        usernameElement: () => cy.get('[data-test="username"]'),
        // Input field for password
        passwordElement: () => cy.get('[data-test="password"]'),
        // Login button element
        loginButton: () => cy.get('[data-test="login-button"]')
    }

    login(username, password) {
        // Enter username
        this.elements.usernameElement().type(username)
        // Enter password
        this.elements.passwordElement().type(password)
        // Ensure login button is visible then click to submit
        this.elements.loginButton().should('be.visible').and('contain', 'Login').click()
    }
}

export default LoginPage