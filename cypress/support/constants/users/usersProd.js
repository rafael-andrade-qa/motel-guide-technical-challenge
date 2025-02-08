const cypressSuccessName = Cypress.env('CYPRESS_SUCCESS_NAME');
const cypressSuccessEmail = Cypress.env('CYPRESS_SUCCESS_EMAIL');
const cypressSuccessPassword = Cypress.env('CYPRESS_SUCCESS_PASSWORD');

const cypressLowPasswordName = Cypress.env('CYPRESS_LOW_PASSWORD_NAME');
const cypressLowPasswordEmail = Cypress.env('CYPRESS_LOW_PASSWORD_EMAIL');
const cypressLowPasswordPassword = Cypress.env('CYPRESS_LOW_PASSWORD_PASSWORD');

const cypressDifferentEmailsName = Cypress.env('CYPRESS_DIFFERENT_EMAILS_NAME');
const cypressDifferentEmailsEmail = Cypress.env(
  'CYPRESS_DIFFERENT_EMAILS_EMAIL'
);
const cypressDifferentEmailsConfirmEmail = Cypress.env(
  'CYPRESS_DIFFERENT_EMAILS_CONFIRM_EMAIL'
);
const cypressDifferentEmailsPassword = Cypress.env(
  'CYPRESS_DIFFERENT_EMAILS_PASSWORD'
);

const usersProd = {
  successUser: {
    name: cypressSuccessName,
    email: cypressSuccessEmail,
    password: cypressSuccessPassword,
  },
  emptyName: {
    name: null,
    email: cypressSuccessEmail,
    password: cypressSuccessPassword,
  },
  emptyEmail: {
    name: cypressSuccessName,
    email: null,
    password: cypressSuccessPassword,
  },
  emptyPassword: {
    name: cypressSuccessName,
    email: cypressSuccessEmail,
    password: null,
  },
  lowPassword: {
    name: cypressLowPasswordName,
    email: cypressLowPasswordEmail,
    password: cypressLowPasswordPassword,
  },
  differentEmails: {
    name: cypressDifferentEmailsName,
    email: cypressDifferentEmailsEmail,
    confirmEmail: cypressDifferentEmailsConfirmEmail,
    password: cypressDifferentEmailsPassword,
  },
};

export default usersProd;
