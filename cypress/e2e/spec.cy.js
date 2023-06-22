describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/signin')
    cy.get('#email').type('abc')
    cy.get('#email').should('have.value', 'abc')
  })
})