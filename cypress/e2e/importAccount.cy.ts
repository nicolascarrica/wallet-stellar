describe('Access Account with Private Key', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.wait(2000);
  });

  it('no should access account without private key', () => {
    const privateKey ='asdasds'
    cy.wait(2000);
    cy.get('input[type="text"]').type(privateKey); // Verifica el selector 'input[type="text"]'
    cy.get('button').contains('Import Account').click();
    cy.contains('Invalid number of characters').should('be.visible');

 })

  it('should access account with private key', () => {
    cy.wait(2000);
    const privateKey = 'SAD3KF2GCCX476LLBTXR7LJ3MYNPNLBAXZFUTK4K7BPLESD4K2B5FCFG'; // Reemplaza con la clave privada que deseas probar

    cy.get('input[type="text"]').as('inputField');
    cy.get('@inputField').type(privateKey); // Ingresa la clave privada en el campo de entrada
    cy.get('button').contains('Import Account').click()

 });


});
