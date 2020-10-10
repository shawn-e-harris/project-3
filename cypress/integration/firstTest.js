/// <reference types="cypress" />

describe("Testing Data Storage", () => {

    it.only("Add activity", () => {
        // visit baseUrl
        cy.visit("/")

        // locate by attribute with content that contains "Activities"
        cy.contains('[href]', "Activities")
        // click activities link
        .click()
        // locate input by attribute name & value
        cy.get('[placeholder="New Activity"]')
        // type "Read a Book" into input
        .type("Read a Book")
        
    })
})