Cypress.Commands.add("getCouponsWooCommerce", (token) => {
  cy.request({
    method: "GET",
    url: Cypress.env("wooCommerce") + Cypress.env("coupons"),
    headers: {
      Authorization: token,
    },
  });
});
