// const { cyan } = require("@material-ui/core/colors")
// const { IsoTwoTone } = require("@material-ui/icons")

/// <reference types="cypress" />

describe("Testing Data Storage", () => {

    it.only("Add activity", () => {
        cy.visit("/")
        cy.contains('[href]', "Activities")
        .click()
        cy.get('[placeholder="New Activity"]')
        .type("Read a Book")
    })
})