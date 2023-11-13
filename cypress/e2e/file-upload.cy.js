/// <reference types = "cypress" />
import MiddlePageMenu from "../pages/MiddlePageMenu";
describe("File upload test", () => {
  it("File uplad test", () => {
    cy.visit("https://qa-practice.netlify.app/file-upload");
    MiddlePageMenu.getChooseFileBtn().selectFile("cypress/fixtures/readme.txt");
    MiddlePageMenu.getFileUploadSubmitBtn().click();
    cy.get("#file_upload_response")
      .contains("You have successfully uploaded")
      .should("be.visible");
  });
});
