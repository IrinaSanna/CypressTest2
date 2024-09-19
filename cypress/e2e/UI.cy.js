import loginTestHappy from "../fixtures/happyPathLogin.json";
import selector from "../fixtures/selectors/UI.json";
import seats from "../fixtures/seats.json";

describe('UI test', () => {

  it("Should be the movie from the admin panel", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    const login = loginTestHappy;
    const password = loginTestHappy;
    cy.login(login.login, password.password);
    cy.get(selector.nameMovie).should("contain", "Микки маус");
    cy.visit("http://qamid.tmweb.ru/");
    cy.get(selector.day).click();
    cy.get(selector.seance).click();
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(".acceptin-button").click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  });
})