class LoginPage{
    getEmail(){
        return cy.get('#email');
    }
}

export default new LoginPage();