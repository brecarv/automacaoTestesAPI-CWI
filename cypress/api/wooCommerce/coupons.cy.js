import { faker } from "@faker-js/faker";

import tokenFixture from "../../fixtures/token.json";
import couponsFixture from "../../fixtures/coupons.json";

describe("Coupons", () => {
  it("Listar todos os coupons", () => {
    cy.getCouponsWooCommerce(tokenFixture.token).then((response) => {
      expect(response).to.exist;
      expect(response.status).to.eq(200);
    });
  });

  it("Criar Coupon", () => {
    let code = faker.datatype.uuid();
    cy.postCouponsWooCommerce(
      tokenFixture.token,
      code,
      couponsFixture.validCoupon.discount_type,
      couponsFixture.validCoupon.amount,
      couponsFixture.validCoupon.individual_use,
      couponsFixture.validCoupon.exclude_sale_items,
      couponsFixture.validCoupon.minimum_amount
    ).then((response) => {
      expect(response).to.exist;
      expect(response.status).to.eq(201);
    });
  });
});
