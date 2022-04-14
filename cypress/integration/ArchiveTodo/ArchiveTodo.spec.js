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

When ('I click on Archive button',() =>{
    todoPage.clickonArchive();
})

Then ('The Todo Item must be removed from the list',() =>{
    //cy.get('div.column-three-quarter > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-content.mat-column-content.ng-star-inserted').should('not.have.text', 'B_Todo_Item');

    cy.get('div.column-three-quarter > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-content.mat-column-content.ng-star-inserted').invoke('text').then((text1) => {
        expect(text1).to.be.eq('C_Todo_Item')
    })
})


