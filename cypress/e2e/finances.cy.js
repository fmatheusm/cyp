/// <reference types='Cypress'/>
describe("Dev Finances", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Cadastrar entradas", () => {
        cy.get("#transaction .button").click();
        cy.get("#description").type("Mesada");
        cy.get('[name="amount"]').type(12);
        cy.get('[type="date"]').type("2024-07-09");
        cy.contains("Salvar").click();
        cy.get("#data-table tbody tr").should("have.length", 1);
    });

    it("Cadastrar Saidas", () => {
        cy.get("#transaction .button").click();
        cy.get("#description").type('almoço');
        cy.get('[name="amount"]').type(-30);
        cy.get('[type="date"]').type("2024-07-09");
        cy.contains("Salvar").click();

        cy.get("#data-table tbody tr").should("have.length", 1);
    });

    it("Remover entradas e Saidas", () => {
        const entrada = "Mesada";
        const saida = "almoco";

        cy.get("#transaction .button").click();
        cy.get("#description").type(entrada);
        cy.get('[name="amount"]').type(100);
        cy.get('[type="date"]').type("2024-07-09");
        cy.contains("Salvar").click();

        cy.get("#transaction .button").click();
        cy.get("#description").type(saida);
        cy.get('[name="amount"]').type(-30);
        cy.get('[type="date"]').type("2024-07-09");
        cy.contains("Salvar").click();

        cy.get("td.description")
            .contains(entrada)
            .parent()
            .find("img[onclick*=remove]")
            .click();

        cy.get("td.description")
            .contains(saida)
            .siblings()
            .children("img[onclick*=remove]")
            .click();

            cy.get("#data-table tbody tr").should("have.length", 0);
    });

    
});