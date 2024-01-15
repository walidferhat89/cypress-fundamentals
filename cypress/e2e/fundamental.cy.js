
describe('fundamentals test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('header assertions', () => {
    
    cy.get("h1").should('have.class','fundamentals_header__yRsdA')  
  })
  
    it('Accordiant works prop', ()=>{
      
      cy.get('a').contains('Why Cypress?').click()
      cy.contains('An all-in-one testing framework, assertion library, with mocking and stubbing').should('not.be.visible')
      cy.get('p').contains('Reason 1').click()
      cy.contains('An all-in-one testing framework, assertion library, with mocking and stubbing').should('be.visible')
  
    })
  })
