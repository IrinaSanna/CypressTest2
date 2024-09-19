describe('Cinema hall', () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("Should open the main page", () => {
    cy.contains("Идёмвкино");
  });
})