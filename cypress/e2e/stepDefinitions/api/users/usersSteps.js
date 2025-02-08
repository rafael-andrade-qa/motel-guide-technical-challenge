import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { envData } from '../../../../support/constants';

const baseUrl = envData.endpointsProd.baseUrl;
let response;

Given('a GET request is made to {string}', (endpoint) => {
  cy.request({
    method: 'GET',
    url: `${baseUrl}${endpoint}`,
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});

Given(
  'a POST request is made to {string} with body:',
  (endpoint, dataTable) => {
    const body = dataTable.rowsHash();
    cy.request({
      method: 'POST',
      url: `${baseUrl}${endpoint}`,
      body: body,
      headers: {
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false,
    }).then((res) => {
      response = res;
    });
  }
);

Then('the response status should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then('the response should contain a list of users', () => {
  expect(response.body).to.be.an('array').and.not.to.be.empty;
  expect(response.body[0]).to.have.property('id');
  expect(response.body[0]).to.have.property('name');
  expect(response.body[0]).to.have.property('email');
});

Then(
  'the response should contain the created user with name {string} and email {string}',
  (name, email) => {
    expect(response.body).to.have.property('name', name);
    expect(response.body).to.have.property('email', email);
  }
);
