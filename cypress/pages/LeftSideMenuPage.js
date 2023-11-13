class LeftSideMenuPage {
    getSpotTheBugs (){
        return cy.get('#bugs-form')
    }
    getE2EShopEcommerce(){
        return cy.get('#auth-shop')
    }
    getGraphQLTesting(){
        return cy.get('a#graphql-testing')
    }
    getApiTesting(){
        return cy.get('#api-testing')
    }
    getProductListShop(){
        return cy.get('#products-list')
    }
    getInterceptAPIRequest(){
        return cy.get('#intercept-api')
    }
    getVisualTesting(){
        return cy.get('#visual')
    }
    getForms(){
        return cy.get("a").contains("Forms");
    }
    getFormsLogin(){
        return cy.get('a#login')
    }
    getFormsRecoverPsswword(){
        return cy.get('#recover-password')
    }
    getButtons(){
        return cy.get("a").contains("Buttons")
    }
    getButtonsCheckboxes(){
        return cy.get('a#checkboxes')
    }
    getButtonsRadioButtons(){
        return cy.get('a#radio-buttons')
    }
    getNewTabWindow(){
        return cy.get('a').contains('New Tab / Window')
    }
    getNewTabWindow_NewBrowserTab(){
        return cy.get('a#browser-tab')
    }
    getNewTabWindow_NewBrowserWindow(){
        return cy.get('a#browser-window')
    }
    getBtnActions(){
        return cy.get('a').contains('Btn actions')
    }
    getBtnActionsDoubleClickBtn(){
        return cy.get('#double-click')
    }
    getBtnActionsScrolling(){
        return cy.get('#scrolling')
    }
    getBtnActionsMouseHover(){
        return cy.get('#mouse-hover') 
    }
    getBtnActionsShowHide(){
        return cy.get('#show-hide-elements')
    }
    getTables(){
        return cy.get('a').contains('Tables')
    }
    getTablesStaticTable(){
        return cy.get('a').contains('Static Table')
    }
    getTablesDynamicTable(){
        return cy.get('a').contains('Dynamic Table')
    }
    getDropdown(){
        return cy.get('#dropdowns')
    }
    getIframes(){
        return cy.get('#iframes')
    }
    getAlerts(){
        return cy.get('#alerts')
    }
    getFileUpload(){
        return cy.get('#file-upload-item')
    }
    getDataPickers(){
        return cy.get("#date-picker")
    }
    getLoader(){
        return cy.get('#loader')
    }
    getPagination(){
        return cy.get('#pagination')
    }
}

export default new LeftSideMenuPage();