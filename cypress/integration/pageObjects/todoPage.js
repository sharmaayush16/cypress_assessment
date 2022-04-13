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

    createdDate()
    {
        var today = new Date();
        var dd = today.toLocaleDateString("en-US", { day: 'numeric' });
        var mm = today.toLocaleDateString("en-US", { month: 'short' });
        var yyyy = today.toLocaleDateString("en-US", { year: 'numeric' });
        today = mm + ' ' + dd + ', ' + yyyy;
        return today;
    }

    pastDate()
    {
        var date = new Date();
        date ;
        date.setDate(date.getDate() - 1);
        date ;
        var dd = date.toLocaleDateString("en-US", { day: 'numeric' });
        var mm = date.toLocaleDateString("en-US", { month: 'short' });
        var yyyy = date.toLocaleDateString("en-US", { year: 'numeric' });
        var yesterday = mm + ' ' + dd + ', ' + yyyy;
        return yesterday;
    }

    futureDate()
    {
        var date = new Date();
        date ;
        date.setDate(date.getDate() + 367);
        date ;
        var dd = date.toLocaleDateString("en-US", { day: 'numeric' });
        var mm = date.toLocaleDateString("en-US", { month: 'short' });
        var yyyy = date.toLocaleDateString("en-US", { year: 'numeric' });
        var futureDate = mm + ' ' + dd + ', ' + yyyy;
        return futureDate;
    }

    todoDate(date)
    {
        const dateArr = date.split('/');
        let todoDatetemp = dateArr[2]+'-'+dateArr[0]+'-'+dateArr[1];
        var mydate = new Date(todoDatetemp);
        let todoDate = mydate.toDateString();
        const dateArr2 = todoDate.split(' ');
        todoDate = dateArr2[1]+' '+dateArr2[2]+', '+dateArr2[3];
        return todoDate;
    }

    clickCreateButton() // function to click on Create todo button
    {
        const createButton = cy.get('[type="submit"]');
        createButton.click();
        cy.wait(2000);
    }

    enterContentValue(value)  // function to enter value in Content Field
    {
        const content = cy.get('[id="content"]')
        content.clear()
        content.type(value)
        return this;
    }

    enterDateValue(value)  // function to enter value in Content Field
    {
        const date = cy.get('[id="mat-input-1"]')
        date.clear()
        if (value === 'Past'){
            var dateToEnter = this.pastDate();
        } 
        else if (value === 'Future') {
            var dateToEnter = this.futureDate();
        }
        else {
            var dateToEnter = value; 
        }
        date.type(dateToEnter);
        return this;
    }

    compareTodoListData()
    {
        const todoTable = cy.get('//tbody[@role="rowgroup"]');
        todoTable.contains
    }

    clickOnOprtionSelector()
    {
        const optionSelector = cy.get('body > my-app > div > div.column-three-quarter > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.align-right.cdk-column-actions.mat-column-actions.ng-star-inserted > button > span > mat-icon');
        optionSelector.click();
        return this;
    }
    clickonArchive()
    {
        this.clickOnOprtionSelector();
        const archiveButton = cy.get('div > button:nth-child(1) > mat-icon');
        archiveButton.click();
        return this;
    }

    clickonDelete()
    {
        this.clickOnOprtionSelector();
        const deleteButton = cy.get('div > button:nth-child(2)');
        deleteButton.click();
        return this;
    }

    selectDoneCheckBox()
    {
        cy.get('mat-checkbox').first().click();

    }

    clickOnClear()
    {
        const clearButton = cy.get('div.column-three-quarter > footer > button');
        clearButton.click();
    }

}
export default TodoPage