describe('Blog', () => {
    beforeEach(() => {
        // cy.refreshDatabase();
    })

    it('shows all posts', () => {
        cy.create('App\\Post', {
            title: 'My First Post'
        });

        cy.visit('/blog', {
            failOnStatusCode: false
        }).contains('My First Post')
    });

    // it('creates a post', () => {

    // });

})
