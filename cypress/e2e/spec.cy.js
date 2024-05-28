describe('Trick List Application', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      fixture: 'tricks.json'
    }).as('getTricks');
    cy.visit('http://localhost:3000');
  });

  it('should display the header', () => {
    cy.contains('h1', 'Sick Trick Wish List').should('be.visible');
  });

  it('should fetch and display tricks', () => {
    cy.wait('@getTricks');
    cy.get('.trick-list .trick-card').should('have.length', 2);
    cy.get('.trick-card').first().contains('h2', 'treflip');
    cy.get('.trick-card').last().contains('h2', 'heelflip');
  });

  it('should add a new trick', () => {
    cy.get('form').should('be.visible');
    cy.get('select[name="stance"]').should('exist').select('switch');
    cy.get('input[name="name"]').should('exist').type('kickflip');
    cy.get('select[name="obstacle"]').should('exist').select('rail');
    cy.get('input[type="text"]').last().should('exist').type('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    cy.get('button[type="submit"]').should('exist').click();

    cy.get('.trick-list .trick-card').should('have.length', 3);
    cy.get('.trick-card').last().contains('h2', 'kickflip');
  });
});
