/// <reference types="cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import MiddlePage from "../pages/MiddlePageMenu";

describe("Access every element on the left side menu test suite ", () => {
  it("Accesing Spot The BUGS tab test", () => {
    cy.visit("https://qa-practice.netlify.app/");
    LeftSideMenuPage.getSpotTheBugs().click();

    // MiddlePage.getSpotTheBugs_FirstName().should("be.visible");
  });
  it.only("Accesing E2E Shop tab test", () => {
    cy.visit("https://qa-practice.netlify.app/auth_ecommerce");
    MiddlePage.getE2E_EnterEmail().type("admin@admin.com");
    MiddlePage.getE2E_Passwort().type("admin123");
    MiddlePage.getE2E_SubmitBtn().click();

    for (let i = 1; i <= 5; i++) {
      MiddlePage.getE2E_AddToCartBtn(i).click();
    };

    cy.get(".btn.btn-danger").contains("REMOVE").should("be.visible");
  });
});
