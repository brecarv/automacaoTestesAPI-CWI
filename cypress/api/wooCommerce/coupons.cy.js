import tokenFixture from "../../fixtures/token.json";

describe("Coupons", () => {
  it("Listar todos os coupons", () => {
    cy.getCouponsWooCommerce(tokenFixture.token).then((response) => {
      expect(response).to.exist;
      expect(response.status).to.eq(200);
    });
  });
});
