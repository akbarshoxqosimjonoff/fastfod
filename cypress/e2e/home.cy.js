describe('Home Page H1 Check', () => {
  it('should display the correct H1 text', () => {

    cy.visit('/home');


    cy.contains('Только самые').should('exist');


  });
});
