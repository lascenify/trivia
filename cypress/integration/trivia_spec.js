describe('Home', () => {
  it('the home screen is well displayed', () => {
    cy.visit('localhost:3000');
    cy.contains('Welcome to Trivia game!');
    cy.contains('Start');
  });
  it('navigating the game screen', () => {
    cy.contains('Start').click();
    cy.url().should('include', '/game');
  });
});

describe('Game', () => {
  it('The question is displayed', () => {
    cy.get('.Game').find('input').should('have.length.greaterThan', 0);
  });
  it('The result is not shown until one option is clicked', () => {
    cy.contains('Check answer!').click();
    cy.get('.Result').should('not.exist');
  });
  it('The result is shown ', () => {
    cy.get('.Game').find('input').first().click();
    cy.contains('Check answer!').click();
    cy.get('.Result').should('exist');
  });
});
