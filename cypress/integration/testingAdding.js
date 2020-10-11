/// <reference types="cypress" />

describe("Testing Adding Activities & Journals", () => {

    beforeEach('Adding Something New', () => {
        // visit baseUrl
        cy.visit('/')
    })
    it.only("Add Activity", () => {
        
        // locate by attribute with content that contains "Activities"
        cy.contains('[href]', "Activities")
            // click activities link
            .click()
        // locate input by attribute name & value
        cy.get('[placeholder="New Activity"]')
            // type "Read a Book" into input
            .type("Read a Book")
            // travel up DOM to parent
            .parent()
            // locate child radio by attribute name & value 
            .find('[value="Low"]')
            // click Low Activity radio
            .click()
            // travel up DOM to parent
            .parent()
            // locate child submit by attribute name & value
            .find('[type="submit"]')
            // click Submit
            .click()
        // verify submit worked
        cy.get('.iActivity')
            // verify Activity should contain "Read a Book"
            .should('contain', 'Read a Book')
        cy.get('.iEnergyLevel')
            // verify Energy Level should contain "Low"
            .should('contain', 'Low')
    })

    it('Add Journal Entry', () => {
        
        // locate by attribute with content that contains "Activities"
        cy.contains('[href]', "Journal")
        // click activities link
        .click()
        // locate input by attribute name & value
        cy.get('[placeholder="New Journal"]')
        // type "Today I worked on a Cypress test and I feel accomplished!" into input
        .type('Today I worked on a Cypress test and I feel accomplished!')
        // travel up DOM to parent w/ form element
        .parent('form')
        // click Submit
        .submit()
    })
})