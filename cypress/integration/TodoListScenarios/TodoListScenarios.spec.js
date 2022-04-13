import TodoPage from '../pageObjects/todoPage'

const todoPage = new TodoPage();

Given('Application is running',()=>{
    todoPage.navigateToURL();
})

When('I create multiple Todos',(datatable)=>{
    // Enter the Todo data provided in feature file
    datatable.hashes().forEach(element =>{
        todoPage.enterContentValue(element.todo);
        todoPage.enterDateValue(element.dueDate);
        todoPage.clickCreateButton();
    })
})

Then('I should be able to see the Todo listed in ascending order of due dates',()=> {
        //comparing Todo content and due Date given in the feature file with the list visible on the application
        const expectedDates = ['May 15, 2022','Jul 18, 2022','Jul 21, 2022'];
        cy.get('body > my-app > div > div.column-three-quarter > table > tbody > tr > td:nth-child(3)').then((items)=> {
            expect(items[0]).to.contain.text(expectedDates[0]);
            expect(items[1]).to.contain.text(expectedDates[1]);
            expect(items[2]).to.contain.text(expectedDates[2]);
            //const applicationDates = items.map((index, html) => Cypress.$(html).text()).get();
            //expect(sortedItems).to.deep.equal(expectedDates);
        })

})

Then('I should be able to see the Todo listed alphabetically',()=> {
        //comparing Todo content and due Date given in the feature file with the list visible on the application
        const expectedTodo = ['A_Todo_Item','B_Todo_Item','C_Todo_Item'];
        cy.get('body > my-app > div > div.column-three-quarter > table > tbody > tr > td:nth-child(1)').then((items)=> {
            expect(items[0]).to.contain.text(expectedTodo[0]);
            expect(items[1]).to.contain.text(expectedTodo[1]);
            expect(items[2]).to.contain.text(expectedTodo[2]);
            //const sortedItems = items.map((index, html) => Cypress.$(html).text()).get();
            //expect(sortedItems).to.deep.equal(expectedTodo);
      })
        

})