describe('Wallet Main Screen', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
      cy.wait(2000);
      cy.get('button').contains('Create Account').click();
      cy.wait(2000);
      cy.get('button').contains('Go Next').click();
      cy.wait(6000);
    });
  
    it('should display wallet data', () => {
      
      cy.get('.title.setup').should('contain', 'Welcome to your Stellar Wallet');
      cy.get('.public-key input').should('be.visible');
      cy.get('button').contains('Copy').should('be.visible');
   
      cy.get('.balance-account .input-group').should('have.length.greaterThan', 0);
      cy.get('.balance-account .input-group').first().within(() => {
        cy.get('input').should('have.value', '10000.0000000');  
      });

      cy.get('.title.setup').should('contain', 'Send XLM');
      cy.get('.balance-account .input-group').should('exist');
      cy.get('input[placeholder="Amount"]').should('exist');
      cy.get('input[placeholder="Recipient"]').should('exist');
      cy.get('button').contains('Send').should('exist');

      cy.get('button').contains('Logout').should('exist');
     
    });

    it('should send XLM successfully', () => {
      const recipient = 'GA6LXFWBPRMDDBCRE63MPIBEOLD4E733D533ZSFR4ZMPN7XK2GQV2GUE';
  
      cy.get('input[placeholder="Amount"]').type('100.000');
      cy.get('input[placeholder="Recipient"]').type(recipient);
      cy.wait(2000);
  
      cy.get('button').contains('Send').click();
  
      cy.get('div.success-toast', { timeout: 10000 }).should('exist');
      
    });

  
    it('should display an error when sending fails', () => {
      cy.get('input[placeholder="Amount"]').type('100.00');
      cy.get('input[placeholder="Recipient"]').type('hjksahdas');
      cy.wait(2000);
 
      cy.get('button').contains('Send').click();
      cy.contains('Error sending, please verify the entered data.').should('be.visible');
      
    });
  
  });

  
  
  
  
  
  
  