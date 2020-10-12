/// <reference types="cypress" />
describe('Testing Routes', () => {

    it.only('Test All Routes', () => {
        cy.visit('/')
        cy.visit('/activities')
        cy.visit('/journals')
    })
})