import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../../../../support/pageObjects/register/registerPage';
import { envData } from '../../../../support/constants';

Given('the user is on the registration screen', () => {
  RegisterPage.visit(envData.urls.register);
});

Given('user {string} enters his credentials', (userKey) => {
  const user = envData.users[userKey];

  if (user?.name) {
    RegisterPage.typeName(user.name);
  }

  if (user?.email) {
    RegisterPage.typeEmail(user.email);
    const confirmEmail =
      userKey === 'differentEmails' ? user.confirmEmail : user.email;
    RegisterPage.typeConfirmEmail(confirmEmail);
  }

  if (user?.password) {
    RegisterPage.typePassword(user.password);
  }
});

When('clicks the register button', () => {
  RegisterPage.clickRegisterButton();
});

Then(
  'the system should display an success message {string}',
  (successMessage) => {
    RegisterPage.checkSuccessMessage(successMessage);
  }
);

Then('the system should display an error message {string}', (errorMessage) => {
  RegisterPage.checkErrorMessage(errorMessage);
});
