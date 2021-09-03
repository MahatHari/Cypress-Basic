/// <reference types="cypress"/>

describe('Visit Cypress ', () => {
  it('should navigate to get command and  assert border', () => {
    cy.viewport(1440, 900);
    cy.visit('https://docs.cypress.io');

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
  it.only(' should take input and search for that input', () => {
    cy.viewport(1400, 900);
    cy.visit('https://docs.cypress.io');
    cy.get('nav')
      .get('.DocSearch', { timeout: 20000 })
      .click()
      .should('not.be.focused');
    cy.get('#docsearch-input')
      .should('be.visible')
      .type('find')
      .should('be.focused');
    cy.get('.DocSearch-Dropdown')
      .find('#docsearch-item-0')
      .should('have.text', 'find')
      .click()
      .url()
      .should('include', '/api/commands/find');
  });
});
