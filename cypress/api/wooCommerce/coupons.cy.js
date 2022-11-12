import { faker } from "@faker-js/faker";

import tokenFixture from "../../fixtures/token.json";
import couponsFixture from "../../fixtures/coupons.json";
import statusFixture from "../../fixtures/status.json";

import couponWooCommerceSchema from "../../contracts/coupon.contract";

describe("Coupons", () => {
  it("Listar todos os coupons", () => {
    cy.getCouponsWooCommerce(tokenFixture.token).then((response) => {
      expect(response).to.exist;
      expect(response.status).to.eq(statusFixture.ok);
      for (let i = 0; i < array.length; i++) {
        return couponWooCommerceSchema.validateAsync(response.body[i]);
      }
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
      return (
        couponWooCommerceSchema.validateAsync(response.body),
        cy.deleteCouponsWooCommerce(
          tokenFixture.token,
          id,
          couponsFixture.deleteCoupon.force
        )
      );
    });
  });

  it("Editar Coupon", () => {
    let code = faker.datatype.uuid();
    cy.putCouponsWooCommerce(
      tokenFixture.token,
      code,
      couponsFixture.validCoupon.discount_type,
      couponsFixture.validCoupon.amount,
      couponsFixture.validCoupon.individual_use,
      couponsFixture.validCoupon.exclude_sale_items,
      couponsFixture.validCoupon.minimum_amount
    ).then((response) => {
      let codeEditar = faker.datatype.uuid();
      let id = response.body.id;
      cy.putCouponsWooCommerce(
        tokenFixture.token,
        codeEditar,
        couponsFixture.editedCoupon.discount_type,
        couponsFixture.editedCoupon.amount,
        couponsFixture.editedCoupon.individual_use,
        couponsFixture.editedCoupon.exclude_sale_items,
        couponsFixture.editedCoupon.minimum_amount,
        id
      ).then((response) => {
        expect(response.status).to.eq(statusFixture.ok);
        expect(response.body.code).to.eq(codeEdit);
        expect(response.body.discount_type).to.eq(
          couponsFixture.editedCoupon.discount_type
        );
        expect(response.body.amount).to.eq(couponsFixture.editedCoupon.amount);
        expect(response.body.individual_use).to.eq(
          couponsFixture.editedCoupon.individual_use
        );
        expect(response.body.exclude_sale_items).to.eq(
          couponsFixture.editedCoupon.exclude_sale_items
        );
        expect(response.body.minimum_amount).to.eq(
          couponsFixture.editedCoupon.minimum_amount
        );
        return (
          couponWooCommerceSchema.validateAsync(response.body),
          cy.deleteCouponsWooCommerce(
            tokenFixture.token,
            id,
            couponsFixture.deleteCoupon.force
          )
        );
      });
    });
  });

  it("Deletar Coupon", () => {
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
      let id = response.body.id;
      cy.deleteCouponsWooCommerce(
        tokenFixture.token,
        id,
        couponsFixture.deleteCoupon.force
      ).then((response) => {
        expect(response.status).to.eq(statusFixture.ok);
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
});
