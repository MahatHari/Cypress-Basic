/// <reference types="cypress"/>
beforeEach(() => {
  cy.viewport(1440, 900);
  cy.visit('https://docs.cypress.io');
});

describe('Visit Cypress ', () => {
  it.only('should navigate to get command and  assert border', () => {
    cy.get('nav').within(() => {
      cy.contains('API').click();
    });
    cy.get('.main-content-article').within(() => {
      cy.contains('get').click();
      cy.url().should('include', '/api/commands/get');
    });
    cy.get('#Get-vs-Find')
      .scrollIntoView()
      //.should('be.visible')
      .should('have.css', 'border-bottom-width', '1px');
  });
});
describe('Test search functionality', () => {
  it.only(' should take input and search for that input in modal and close modal', () => {
    cy.get('.DocSearch', { timeout: 10000 }).click().should('not.be.focused');
    cy.get('#docsearch-input')
      .should('be.visible')
      .type('find')
      .should('be.focused');
    cy.get('.DocSearch-Dropdown')
      .find('#docsearch-item-0')
      .should('have.text', 'find')
      .click()
      .should('not.exist')
      .url()
      .should('include', '/api/commands/find');
  });
});
