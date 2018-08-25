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
        });

        it('Forum links to correct and working url', () => {
            cy.get('ul>li>a')
                .eq(1)
                .should('have.attr', 'href').and('include', 'https://forum.vuejs.org');
            cy.request('https://forum.vuejs.org').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Community Chat links to correct and working url', () => {
            cy.get('ul>li>a')
                .eq(2)
                .should('have.attr', 'href').and('include', 'https://chat.vuejs.org');
            cy.request('https://chat.vuejs.org').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Vue Twitter links to correct and working url', () => {
            cy.get('ul>li>a')
                .eq(3)
                .should('have.attr', 'href').and('include', 'https://twitter.com/vuejs');
            cy.request('https://twitter.com/vuejs').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Docs for This Template links to correct and working url', () => {
            cy.get('ul>li>a')
                .eq(4)
                .should('have.attr', 'href').and('include', 'http://vuejs-templates.github.io/webpack/');
            cy.request('http://vuejs-templates.github.io/webpack/').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

    });
});

