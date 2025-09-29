describe('Calculatrice Node.js', () => {


  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })


  it("Addition 10 + 7 = 17", () => {
    cy.get("#a").type("10");
    cy.get("#b").type("7");
    cy.get("#btnAdd").click();
    cy.get("#result").should("contain", "17")
  })



  it("Division par zero renvoie une erreru ", () => {
    cy.get("#a").type("10");
    cy.get("#b").type("0");
    cy.get("#btnDiv").click();
    cy.get("#result").should("contain", "Erreur")
    
  })

})