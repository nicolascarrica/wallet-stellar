describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('displays all elements on the page', () => {
    cy.contains('Welcome to your Stellar Wallet').should('be.visible');
    cy.contains('Is this your first time here? You\'ll need a KeyPair so we can get started').should('be.visible');
    cy.get('button')
      .contains('Create Account')
      .should('be.visible');
    cy.contains('If you already have an account, you can import it.').should('be.visible');
    cy.get('input').should('be.visible');
    cy.get('button')
      .contains('Import Account')
      .should('be.visible');
  });
});