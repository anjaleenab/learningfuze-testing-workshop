//needs to have a different naming convention from jest test material

describe('e2e', () => {
  it('should allow creating a post', ()=> {
    cy.visit('/');
    cy.contains('Title').click()
    const title = `My Awesome Post ${Date.now()}`;
    cy.focused().type('My Awesome Post')
  }
  )
})
