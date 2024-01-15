describe('form tests', ()=>{
    it('email subsceiption', ()=>{
        cy.visit('/forms')  //visiting the website
        cy.contains(/testing forms/i)
        cy.get("input[id=':R1mqqcq:']").type('walidferhat@gmail.com')
        cy.get("button[type='button']").click()

    })
})