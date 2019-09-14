import { getGreeting } from '../support/app.po';

describe('my-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to my-app!');
  });
});
