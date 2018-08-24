context('Vue App Welcome Page', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    });

    it('Page Title', () => {
        cy
            .get('h1')
            .contains('Welcome to Your Vue.js App');
    });
});

