describe('Home page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should  be able to visit the page and render the header', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies`, { fixture: 'movies.json' })
    cy.get('.header-container').contains('Rancid Tomatillos')
    cy.get('.header-container').contains(`The World's Best Movie Database`)
  })

  it('When a user visits the app, all movies should be displayed', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies`, { fixture: 'movies.json' })
    cy.get('.movies-container').find('.card').should('have.length',3)
  })
  it('All movie cards should display movie info and have a movie img', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies`, { fixture: 'movies.json' })
    cy.get('.card').eq(0).contains("4/10")
    cy.get('.card').eq(0).contains("2022-10-19")
    cy.get('.card').eq(0).find("img").should('have.attr','src').should('include','https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')

    cy.get('.card').eq(1).contains("4/10")
    cy.get('.card').eq(1).contains("2022-09-15")
    cy.get('.card').eq(1).find("img").should('have.attr','src').should('include','https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg')

    cy.get('.card').eq(2).contains("7/10")
    cy.get('.card').eq(2).contains("2022-11-15")
    cy.get('.card').eq(2).find("img").should('have.attr','src').should('include','https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg')
  })

  it('When the response is a 500 level error there is an error message displayed', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies`, { statusCode: 500 })
    cy.get('h1').contains("There was an error")
  })

})