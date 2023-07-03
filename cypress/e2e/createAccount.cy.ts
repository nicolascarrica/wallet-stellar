describe('Create Account', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('clicks the Create Account button', () => {
        cy.wait(2000);
        cy.get('button')
        .contains('Create Account')
        .should('be.visible')
        .click();
        
        cy.wait(2000);
        cy.contains('Warning: Make sure to securely store your secret key').should('be.visible');
        cy.get('.input-group input').should('be.visible')
        cy.get('button').contains('Copy').should('be.visible');
        cy.get('button')
        .contains('Go Back')
        .should('be.visible');
        cy.get('button')
        .contains('Go Next')
        .should('be.visible');
        cy.get('button').contains('Go Next').click();
        cy.contains('Funding in progress...').should('be.visible');
    
    });

});
  
