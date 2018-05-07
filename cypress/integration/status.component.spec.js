describe('Status Component', () => {

  it('should display the component if a user is logged in', () => {
    cy
      .login('test@test.com', 'test');
    cy
      .location('pathname').should('eq', '/')
      .get('p').contains('You logged in test@test.com!')
      .get('a.btn').contains('Status').click();
    cy
      .location('pathname').should('eq', '/status')
      .get('h1').contains('Status Works!')
      .get('a.btn').contains('Home');
  });

  it('should not display the component if a user is not logged in', () => {
    cy
      .visit('/')
      .get('a.btn').contains('Status').click();
    cy
      .location('pathname').should('eq', '/log-in')
      .get('h1').contains('Status Works!').should('not.be.visible');
  });

});
