// ***** This class contains all the supporting functions and objects required to operate on Create Todo page ****

class TodoPage{
    
    navigateToURL() // function to navigate to application URL
    {
        cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/');
    }

    createTodoButton()
    {
        const createButton = cy.get('[type="submit"]');
        return createButton;
    }

    clickCreateButton() // function to click on Create todo button
    {
        createTodoButton().click();
        cy.wait(2000);
    }

    enterContentValue(value)  // function to enter value in Content Field
    {
        const content = cy.get('[id="content"]')
        content.clear()
        content.type(value)
    }

    enterDateValue(value)  // function to enter value in Content Field
    {
        const date = cy.get('[id="mat-input-1"]')
        date.clear()
        date.type(value)
    }

    compareTodoListData()
    {
        const todoTable = cy.get('//tbody[@role="rowgroup"]');
        todoTable.contains
    }

    searchPeopleWithEnter(value)  // function to search people by pressing "Enter"
    {
        this.selectPeopleRadioButton()
        this.enterValueToSearch(value)
        cy.get('#query').type('{enter}')
    }

    searchPlanetWithEnter(value)  // function to search planets by pressing "Enter"
    {
        this.selectPlanetRadioButton()
        this.enterValueToSearch(value)
        cy.get('#query').type('{enter}')
    }

    clearSearchForm()  // function to clear Search form
    {
        const searchText = cy.get('#query')
        searchText.clear()
    }
    
    planetSearch(value)  // function to search planet
    {
        this.selectPlanetRadioButton()
        this.enterValueToSearch(value)
        this.clickSearchButton()
        return this
    }

    characterSearch(value)  // function to search people
    {   
        this.selectPeopleRadioButton()
        this.enterValueToSearch(value)
        this.clickSearchButton()
        return this
    }
}
export default TodoPage