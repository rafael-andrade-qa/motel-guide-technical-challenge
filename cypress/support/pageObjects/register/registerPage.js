import selectors from '../../selectors';

class RegisterPage {
  visit(url) {
    cy.visit(url);
  }

  typeName(name) {
    cy.get(selectors.register.name).clear().type(name);
  }

  typeEmail(email) {
    cy.get(selectors.register.email).clear().type(email);
  }

  typeConfirmEmail(confirmEmail) {
    cy.get(selectors.register.confirmEmail).clear().type(confirmEmail);
  }

  typePassword(password) {
    cy.get(selectors.register.password).clear().type(password);
  }

  clickRegisterButton() {
    cy.get(selectors.register.registerButton).click();
  }

  checkSuccessMessage(expectedMessage) {
    cy.get(selectors.register.registerSuccessMessage).should(
      'contain.text',
      expectedMessage
    );
  }

  checkErrorMessage(expectedMessage) {
    cy.get('span').contains(expectedMessage).should('be.visible');
  }
}

export default new RegisterPage();
