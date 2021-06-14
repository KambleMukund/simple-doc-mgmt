/// <reference types="cypress" />

context("Application Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Visits the Document Upload Application", () => {
    // it("Application Layout", () => {
    //   cy.get("#app-layout").should("exist");
    // });

    // it("Home Page Loading", () => {
    //   cy.get("#home-page").should("exist");
    // });

    it("Application Navigation", () => {
      cy.visit("http://localhost:3000/");
      cy.get("li:nth-child(3) span").click();
      cy.get("a > span:nth-child(1)").click();
      cy.get("label").click();
      // cy.get("#fileUpload").click();
      // cy.get("#fileUpload").type(
      //   "D:/MyWorkSpaces/ReactWorkSpace/simple-doc-mgmt/simple-doc-mgmt/src/server/public/samples/dummy.pdf"
      // );
      cy.get(".button-grey:nth-child(1)").click();
      cy.get("form").submit();
      cy.get(".button-grey:nth-child(2)").click();
      cy.get("div > div > span span").click();
      // cy.get(".ag-cell-focus path").click();
      // cy.get(".fa-window-close").click();
    });
  });
});
