import loginTestHappy from "../fixtures/happyPathLogin.json";
import loginTestSad from "../fixtures/sadPathLogin.json";
import selector from "../fixtures/selectors/admin.json";

describe("Admin module", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it("Should be authorization in admin module", () => {
    const login = loginTestHappy;
    const password = loginTestHappy;
    cy.login(login.login, password.password);
    cy.get(selector.subtitle).should("be.visible");
  });

  it("Should not log in with the wrong login", () => {
    const login = loginTestSad;
    const password = loginTestSad;
    cy.login(login.login, password.password);
    cy.get('[for="email"] > .login__input').then((elements) => {
      expect(elements[0].validationMessage).to.be.eql('Недопустимое положение символа "." в адресе "qamid.".');
    });
  });
});
