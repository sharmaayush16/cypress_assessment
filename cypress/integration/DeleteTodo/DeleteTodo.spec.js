import TodoPage from '../pageObjects/todoPage'

const todoPage = new TodoPage()

Given('Application is running',()=>{
    todoPage.navigateToURL();
})

And ('Todo Item is added in the list',(datatable)=>{
    // Enter the Todo data provided in feature file
    datatable.hashes().forEach(element =>{
        todoPage.enterContentValue(element.todo);
        todoPage.enterDateValue(element.dueDate);
        todoPage.clickCreateButton();
    })
})

When ('I click on Delete button',() =>{
    todoPage.clickonDelete();
})

When ('I Select the Done Checkbox',() =>{
    todoPage.selectDoneCheckBox();
})

Then ('The Todo Item must be removed from the list',() =>{
    cy.get('body > my-app > div > div.column-three-quarter > table > tbody').should('not.have.text', 'B_Todo_Item');
})

And ('The Todo Item must be removed from the persisted memory',() =>{
    cy.reload();
    cy.get('body > my-app > div > div.column-three-quarter > table > tbody').should('not.have.text', 'B_Todo_Item');
})

And ('Click on Clear Completed button',() =>{
    todoPage.clickOnClear();
})


