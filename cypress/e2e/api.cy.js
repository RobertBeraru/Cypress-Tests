import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import MiddlePageMenu from "../pages/MiddlePageMenu";
describe("API handling test suite", () => {
  it("API test", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/comments").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
  it("Wait for API", () => {
    const newPostTitle = "RB";

    cy.intercept({
      method: "GET",
      url: "/comments",
    }).as("get-comments-api"); 

    cy.intercept({
        method: "POST",
        url:"/posts"
    }).as("create-post-api")

    cy.visit("https://qa-practice.netlify.app/");
    LeftSideMenuPage.getInterceptAPIRequest().click();
    cy.wait("@get-comments-api").its("response.statusCode").should("eq", 200);
    MiddlePageMenu.getInterceptAPIRequest_PostTitle().type(newPostTitle);
    MiddlePageMenu.getInterceptAPIRequest_CREATEPostBtn().click();
    cy.wait("@create-post-api").its("response.statusCode").should("eq", 201);
    cy.get("#response")
      .contains(
        `New ${newPostTitle} post CREATED. API Request sent. You can find it in DevTools (F12) > Network tab.`
      )
      .should("be.visible");
  });
});
