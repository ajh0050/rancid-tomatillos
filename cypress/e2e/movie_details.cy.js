describe('Movie details page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/436270');
  });

  it('As a user I should be able to click a movie and see its details page',() => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`, { fixture: 'movie.json' })
    cy.visit('http://localhost:3000')
    cy.get('.card').eq(0).click().url().should('equal', 'http://localhost:3000/movies/436270')
  })

  it('Should  be able to visit the page items are rendered', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`, { fixture: 'movie.json' })
    cy.get('.movie-details-container').get('.movie-title').contains('Black Adam 4/10')
    cy.get('.hero-image').should('have.attr', 'src').should('include','https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
    cy.get('.tagline').contains(`The world needed a hero. It got Black Adam.`)
    cy.get('.overview').contains('Nearly 5,000')
    cy.get('.release-date').contains('2022-10-19')
    cy.get('.runtime').contains('125 minutes')
    cy.get('.budget').contains('$200,000,000')
    cy.get('.revenue').contains('$384,571,691')
    cy.get('.genres').contains('Action,Fantasy,Science Fiction')
  })

  it('Should be able to click a button to return to the home view', () => {
    cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies`, { fixture: 'movies.json' }) 
    cy.get('.home-button').contains('Return to all movies').click().url().should('equal','http://localhost:3000/')
    cy.get('.movies-container').find('.card').should('have.length',3)
  })

  it('A user should be redirected to Page not found view if they enter a movie url that doesnt exist', () => {
    cy.visit('http://localhost:3000/movies/433470')
    cy.get('h1').contains('Page Not Found')
  })
})