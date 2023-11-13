/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("Registration test suite", () => {

  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/register")
  });

  it("Register test", () => {
    
    cy.get("#firstName").type(faker.person.firstName(), {delay:0});
    cy.get("#lastName").type(faker.person.lastName(), {delay:0});
    cy.get("#phone").type(faker.phone.number(), {delay:0});
    cy.get("#countries_dropdown_menu").select("Romania");
    cy.get("#emailAddress").type("testing@nuclene.com");
    cy.get("#password").type(faker.internet.password());
    cy.get("#exampleCheck1").click();
    cy.get("#registerBtn").click();
    cy.get("#message").should("be.visible");
  
  });
});
