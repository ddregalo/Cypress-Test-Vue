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
                .should('contain', 'Core Docs')
                .should('have.attr', 'href').and('include', 'https://vuejs.org');
            cy.request('https://vuejs.org').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Forum link content is correct and links to designated working url', () => {
            cy.get('ul>li>a')
                .eq(1)
                .should('contain', 'Forum')
                .should('have.attr', 'href').and('include', 'https://forum.vuejs.org');
            cy.request('https://forum.vuejs.org').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Community Chat link content is correct and links to designated working url', () => {
            cy.get('ul>li>a')
                .eq(2)
                .should('contain', 'Community Chat')
                .should('have.attr', 'href').and('include', 'https://chat.vuejs.org');
            cy.request('https://chat.vuejs.org').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Vue Twitter link content is correct and links to designated working url', () => {
            cy.get('ul>li>a')
                .eq(3)
                .should('contain', 'Twitter')
                .should('have.attr', 'href').and('include', 'https://twitter.com/vuejs');
            cy.request('https://twitter.com/vuejs').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('Docs for This Template link content is correct and links to designated working url', () => {
            cy.get('ul>li>a')
                .eq(4)
                .should('contain', 'Docs for This Template')
                .should('have.attr', 'href').and('include', 'http://vuejs-templates.github.io/webpack/');
            cy.request('http://vuejs-templates.github.io/webpack/').then((response) => {
                expect(response.status).to.eq(200);
            });
        });

    });

    describe('Ecosystem Links Section', () => {
        it('has section title', () => {
            cy
                .get('h2')
                .eq(1)
                .contains('Ecosystem');
        });

        it('vue-router links to correct and working url', () => {
            cy
                .get('a')
                .contains('vue-router')
                .should('have.attr', 'href').and('include', 'http://router.vuejs.org/');
            cy.request('http://router.vuejs.org/').then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
});

