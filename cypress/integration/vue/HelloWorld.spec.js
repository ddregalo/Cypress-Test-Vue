describe('Vue App Welcome Page', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    });

    it('Page Title', () => {
        cy
            .get('h1')
            .contains('Welcome to Your Vue.js App');
    });

    describe('Essential Links Section', () => {
        it('has section title', () => {
            cy
                .get('h2')
                .contains('Essential Links');
        });
        it('Core Docs links to correct and working url', () => {
            cy.get('ul>li>a')
                .eq(0)
                .should('have.attr', 'href').and('include', 'https://vuejs.org');
            cy.request('https://vuejs.org').then((response) => {
                expect(response.status).to.eq(200);
            });
            cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
                expect(response.status).to.eq(200)
            })
        });

    });
});

