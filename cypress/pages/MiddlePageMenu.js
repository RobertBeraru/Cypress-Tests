class MiddlePageMenu {
  getSpotTheBugs_FirstName() {
    return cy.get("#firstName");
  }
  getE2E_EnterEmail() {
    return cy.get("#email");
  }
  getE2E_Passwort(){
    return cy.get("#password");
  }
  getE2E_SubmitBtn(){
    return cy.get("#submitLoginBtn");
  }
  getE2E_AddToCartBtn(btnnumber){
    return cy.get(`.shop-item:nth-child(${btnnumber}) .shop-item-button`);
  }
  getGraphQL_GraphQLTesting() {
    return cy.get("div[id='content'] h2");
  }
  getAPITesting_APITesting() {
    return cy.get("div[id='content'] h2");
  }
  getProductListsShop_PurchaseBtn() {
    return cy.get(".btn.btn-primary.btn-purchase");
  }
  getInterceptAPIRequest_CREATEPostBtn() {
    return cy.get(".btn.btn-primary.mb-2");
  }
  getVisualTesting_GIFPage() {
    return cy.get("div[id='content'] h2");
  }
  getForms_Login_Email() {
    return cy.get("#email");
  }
  getForms_Register_FirstName() {
    return cy.get("#firstName");
  }
  getForms_RecoverPassword_Email() {
    return cy.get("#email");
  }
  getButtons_Checkboxes_ResetBtn() {
    return cy.get("button[type='reset']");
  }
  getButtons_RadioButtons_RadioButton1() {
    return cy.get("#radio-button1");
  }
  getNewTab_NewBrowserTab_PressMeNewTabBtn() {
    return cy.get("button[id='newTabBtn']");
  }
  getNewTab_NewBrowserWindow_PressMeNewWindowBtn() {
    return cy.get("#newWindowBtn");
  }
  getBtnActions_DoubleClickBtn_DoubleClickMe() {
    return cy.get("#double-click-btn");
  }
  getBtnActions_Scrolling() {
    return cy.get("#content").contains("Scrolling Demo"); //--> Try me
  }
  getBtnActions_MouseHover_HoverOverMeBttn() {
    return cy.get("#button-hover-over");
  }
  getBtnActions_ShowHideElement_ShowHideBttn() {
    return cy.get("#showHideBtn");
  }
  getTables_StaticTable() {
    return cy.get("#content").contains("Table Example");
  }
  getTables_DynamicTables() {
    return cy.get("th").contains("Avatar");
  }
  getDropdownsSimpleDropdown() {
    return cy.get("#dropdown-menu");
  }
  getIframesLearnMoreBtn() {
    return cy.get("#learn-more");
  }
  getAlertsAlertBtn() {
    return cy.get("#alert-btn");
  }
  getFileUploadSubmitBtn() {
    return cy.get("button[type='submit']");
  }
  getChooseFileBtn() {
    return cy.get("#file_upload");
  }
  getDataPickersPickADateArea() {
    return cy.get("#calendar");
  }
  getLoaderText() {
    return cy.get("h2").contains("Tada!");
  }
  getPaginationNextBtn() {
    return cy.get("a").contains("Next");
  }
}
export default new MiddlePageMenu();
