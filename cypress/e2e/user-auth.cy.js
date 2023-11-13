/// <reference types="cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
describe('Authentication test suite', () => {
  it('Login test', () => {
    cy.visit('https://qa-practice.netlify.app/');
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getFormsLogin().click();
    LoginPage.getEmail().type('admin@admin.com')
    cy.get("#password").type('admin123');
    cy.get("button").contains("Submit").click();
  })
})

