Cypress.Commands.add("getCouponsWooCommerce", (token) => {
  cy.request({
    method: "GET",
    url: Cypress.env("wooCommerce") + Cypress.env("coupons"),
    headers: {
      Authorization: token,
    },
  });
});

Cypress.commands.add(
  "postCouponsWooCommerce",
  (
    token,
    code,
    discount_type,
    amount,
    individual_use,
    exclude_sale_items,
    minimum_amount
  ) => {
    cy.request({
      method: "POST",
      url: Cypress.env("wooCommerce") + Cypress.env("coupons"),
      headers: {
        Authorization: token,
      },
      body: {
        code: code,
        discount_type: discount_type,
        amount: amount,
        individual_use: individual_use,
        exclude_sale_items: exclude_sale_items,
        minimum_amount: minimum_amount,
      },
    });
  }
);

Cypress.commands.add(
  "putCouponsWooCommerce",
  (
    token,
    code,
    discount_type,
    amount,
    individual_use,
    exclude_sale_items,
    minimum_amount
  ) => {
    cy.request({
      method: "PUT",
      url: Cypress.env("wooCommerce") + Cypress.env("coupons") + "/" + id,
      headers: {
        Authorization: token,
      },
      body: {
        code: code,
        discount_type: discount_type,
        amount: amount,
        individual_use: individual_use,
        exclude_sale_items: exclude_sale_items,
        minimum_amount: minimum_amount,
      },
    });
  }
);

Cypress.commands.add("deleteCouponsWooCommerce", (token, id, force) => {
  cy.request({
    method: "DELETE",
    url:
      Cypress.env("wooCommerce") +
      Cypress.env("coupons") +
      "/" +
      id +
      "force=" +
      force,
    headers: {
      Authorization: token,
    },
  });
});
