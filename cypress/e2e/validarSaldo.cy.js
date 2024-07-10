/// <reference types='Cypress'/>
describe('Validar Saldo', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('validar saldo com diversas transacoes', () => {
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

        cy.get('#data-table tbody tr')
            .each(($el, index, list) => {
                cy.get($el)
                    .find('td.income, td.expense')
                    .invoke('text').then(text => {
                        console.log(text);
                    })
            });
    });
});