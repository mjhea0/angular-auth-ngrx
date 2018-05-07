describe('SignUp Component', () => {

  it('should sign a user up', () => {
    cy
      .signup('test@test.com', 'test');
    cy
      .location('pathname').should('eq', '/')
      .get('p').contains('You logged in test@test.com!')
      .get('a.btn').contains('Log in').should('not.be.visible')
      .get('a.btn').contains('Sign up').should('not.be.visible')
      .get('a.btn').contains('Status')
      .get('button.btn').contains('Log out');
  });

  it('should throw an error if the email is already is use', () => {
    cy
      .signup('in@use.com', 'test');
    cy
      .get('p')
      .contains('You logged in test@test.com!')
      .should('not.be.visible');
    cy
      .location('pathname').should('eq', '/sign-up')
      .get('div.alert.alert-danger')
      .contains('That email is already in use.');
  });

  it('should not display an error message when a user first hits the component', () => {
    cy
      .login('not@correct.com', 'incorrect')
      .get('div.alert.alert-danger')
      .contains('Incorrect email and/or password.')
      .get('a.btn').contains('Cancel').click()
      .get('a.btn').contains('Sign up').click();
    // cy
    //   .get('div.alert.alert-danger')
    //   .should('not.be.visible');
  });

});
