describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#email').type('abc')
    cy.get('#email').should('have.value', 'abc')
  })
})

//zmiana z całego adresu url na "/" dzięki zastosowaniu w cypress.config.js baseUrl: 'http://localhost:5173'