describe('Modal', () => {
  beforeEach(() => {
    // cy.intercept('GET', '', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
    cy.get('.ask-signup')
      .click()
  })

  it('should be able to open modal and see title', () => {
    cy.get('h1')
      .should('contain', 'DevPrep Registration')
  })

  it('should be able to fill out two inputs of a form and check those inputs for modal', () => {
    cy.get('form')
    cy.get(".signup-input-username[name='name']")
      .type('Igor')
      .should('have.value', 'Igor')
    cy.get(".signup-input-email[name='email']")
      .type('email@example.com')
      .should('have.value', 'email@example.com')
  })

  it('should be able to see signup button', () => {
    cy.get('.signup-button')
      .should('contain', 'Signup')
  })

  it('should be able to see close button', () => {
    cy.get('.close-button')
      .should('contain', 'Close')
  })

  it('should be able to sign up with username and email when clicking signup button', () => {
    //cy.intercept('POST', 'url', {
    //statusCode: 200,
    //body: {
    //.....
    //}
    //})
    // cy.get('form')
    // cy.get("input[name='name']")
    //   .type('Igor')
    // cy.get("input[name='email']")
    //   .type('email@example.com')
    // cy.get('.login-button')
    //   .click()
    // cy.url('http://localhost:3000/)
    //  .should('exist')
  })

  it('should be able to close modal by clicking close button', () => {
    cy.get('.close-button')
      .click()
    cy.get('h1')
      .should('contain', 'Welcome to DevPrep!')
  })

  //should be able to display an error message if signup is unsuccessful?

})