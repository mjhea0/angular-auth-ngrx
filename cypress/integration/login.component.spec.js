describe('LogIn Component', () => {

  it('should log a user in if the credentials are valid', () => {
    cy
      .login('test@test.com', 'test');
    cy
      .location('pathname').should('eq', '/')
      .get('p').contains('You logged in test@test.com!')
      .get('a.btn').contains('Log in').should('not.be.visible')
      .get('a.btn').contains('Sign up').should('not.be.visible')
      .get('a.btn').contains('Status')
      .get('button.btn').contains('Log out');
  });

  it('should not log a user in if the credentials are invalid', () => {
    cy
      .login('not@correct.com', 'incorrect');
    cy
      .get('p')
      .contains('You logged in test@test.com!')
      .should('not.be.visible');
    cy
      .location('pathname').should('eq', '/log-in')
      .get('div.alert.alert-danger')
      .contains('Incorrect email and/or password.');
  });

  it('should log an authenticated user out', () => {
    cy
      .login('test@test.com', 'test');
    cy
      .get('p').contains('You logged in test@test.com!')
      .get('button.btn').contains('Log out').click()
    cy
      .location('pathname').should('eq', '/')
      .get('h1').contains('Angular + NGRX')
      .get('a.btn').contains('Log in')
      .get('a.btn').contains('Sign up')
      .get('a.btn').contains('Status');
  });

  it('should not display an error message when a user first hits the component', () => {
    cy
      .signup('in@use.com', 'test')
      .get('div.alert.alert-danger')
      .contains('That email is already in use.')
      .get('a.btn').contains('Cancel').click()
      .get('a.btn').contains('Log in').click();
    // cy
      // .get('div.alert.alert-danger')
      // .should('not.be.visible');
  });

});
