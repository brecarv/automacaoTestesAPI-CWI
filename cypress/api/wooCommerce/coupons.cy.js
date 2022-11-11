import { faker } from "@faker-js/faker";

import tokenFixture from "../../fixtures/token.json";
import couponsFixture from "../../fixtures/coupons.json";
import statusFixture from "../../fixtures/status.json";

describe("Coupons", () => {
  it("Listar todos os coupons", () => {
    cy.getCouponsWooCommerce(tokenFixture.token).then((response) => {
      expect(response).to.exist;
      expect(response.status).to.eq(statusFixture.ok);
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
      expect(response.status).to.eq(statusFixture.created);
      expect(response.body.code).to.eq(code);
      expect(response.body.discount_type).to.eq(
        couponsFixture.validCoupon.discount_type
      );
      expect(response.body.amount).to.eq(couponsFixture.validCoupon.amount);
      expect(response.body.individual_use).to.eq(
        couponsFixture.validCoupon.individual_use
      );
      expect(response.body.exclude_sale_items).to.eq(
        couponsFixture.validCoupon.exclude_sale_items
      );
      expect(response.body.minimum_amount).to.eq(
        couponsFixture.validCoupon.minimum_amount
      );
    });
  });
});
