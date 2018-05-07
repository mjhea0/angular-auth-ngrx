describe('Landing Component', () => {

  it('should display the landing page', () => {
    cy
      .visit('/')
      .get('h1').contains('Angular + NGRX')
      .get('a.btn').contains('Log in')
      .get('a.btn').contains('Sign up')
      .get('a.btn').contains('Status');
  });

});
