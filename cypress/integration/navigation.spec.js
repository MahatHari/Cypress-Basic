/// <reference types="cypress"/>
beforeEach(() => {
  cy.viewport(1440, 900);
  cy.visit('https://docs.cypress.io');
});

describe('Visit Cypress ', () => {
  it('should navigate to get command and  assert border', () => {
    cy.get('nav').within(() => {
      cy.contains('API').click();
    });
    cy.get('.main-content-article').within(() => {
      cy.contains('get').click();
      cy.url().should('include', '/api/commands/get');
    });
    cy.get('#Get-vs-Find')
      .scrollIntoView()
      .should('have.css', 'border-bottom-width', '1px');
  });
});
describe('Test search functionality', () => {
  it(' should take input and search for that input in modal and close modal upon clicking any result list', () => {
    //etsi elementti luokan nimellä '.DoSearch', klikka sitä, varmistä että se on epätarkka
    cy.get('.DocSearch', { timeout: 10000 }).click().should('not.be.focused');

    //1. etsi elemennti tunnuksella '#docsearch-input"
    //2. pitäisi olla näkyvissä
    //3. kirjoita 'find'  syöttöruutun
    //4. syöttöruutun pitäisi olla tarkkalla
    cy.get('#docsearch-input')
      .should('be.visible')
      .type('find')
      .should('be.focused');
    //1. etsi elemennti luokan nimellä '.DocSearch-Dropdown"
    //2. sen sisältä etsi elemennti tunnuksellä  '#docsearch-item-0"
    //3. varmista että  se on sama tai vastava   syöttöruutun texti
    //4. klikka sitä
    //5. varmista modal on irotettu DOM:lta
    //6. varmista url sisältää lyötyi'/api/commands/find'
    cy.get('.DocSearch-Dropdown')
      .find('#docsearch-item-0')
      .should('have.text', 'find')
      .click()
      .should('not.exist')
      .url()
      .should('include', '/api/commands/find');
  });
});
