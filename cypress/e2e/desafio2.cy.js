describe('Prueba Funcionalidad To Do List', () => {
    let datos;

    before('Tomamos los datos del fixture', () => {
        cy.fixture('keys').then(data => {
            datos = data;
        })
    })
    beforeEach('Generamos un BE para acceder a To Do List en cada Caso', () => {
        cy.visit('');
        cy.get('[id="registertoggle"]').dblclick();
        cy.get('#user').type(datos.Login.usuario);
        cy.get('input#pass').type(datos.Login.contraseña);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
    });
    it('Ingresar 5 tareas', () => {
        cy.xpath('//*[@id="task"]').type(datos.Tareas.tarea1);
        cy.xpath('/html/body/div[1]/div/div[2]/form/div/div/button').click();
        cy.get('input').type(datos.Tareas.tarea2);
        cy.get('[type$="mit"]').click();
        cy.get('#task').type(datos.Tareas.tarea3)
        cy.contains('button[type="submit"]', 'Send', { matchCase: true }).click();
        cy.get('[type="text"]').type(datos.Tareas.tarea4);
        cy.get('#sendTask').click();
        cy.get('input[id="task"]').type(datos.Tareas.tarea5);
        cy.get('button[id="sendTask"]').click();
    });
    it('Verificar que existan los botones', () => {
        cy.get('#all').should('be.visible');
        cy.get('button[id="completed"]').should('exist');
        cy.contains('Active').should('exist');
        cy.get('#removeAll').should('be.visible')
    });
    it('Agregar 2 tareas, completarlas y eliminar la ultima completada', () => {
        cy.xpath('//*[@id="task"]').type(datos.Tareas.tarea1);
        cy.xpath('/html/body/div[1]/div/div[2]/form/div/div/button').click();
        cy.get('input').type(datos.Tareas.tarea2);
        cy.get('[type$="mit"]').click();
        cy.get('p').parent('div').last();
        cy.get('#root > div > div.css-ha1fhc > ul > li:nth-child(2) > div > button').click();
    });
    it('Agregar 2 tareas, completarlas y eliminar la ultima completada', () => {
        cy.xpath('//*[@id="task"]').type(datos.Tareas.tarea1);
        cy.xpath('/html/body/div[1]/div/div[2]/form/div/div/button').click();
        cy.get('input').type(datos.Tareas.tarea2);
        cy.get('[type$="mit"]').click();
        cy.get('p').parent('div').first();
        cy.get('#root > div > div.css-ha1fhc > ul > li:nth-child(2) > div > button').click();
    });
});