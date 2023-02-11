describe('Home page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('When a user visits the app, all movies should be displayed', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies`, { fixture: 'movies.json' })
  })
})