import TodoPage from '../pageObjects/todoPage'

const todoPage = new TodoPage()

Given('Application is running',()=>{
    todoPage.navigateToURL();
})

When('I enter the Todo Content {string}',(todoContent)=>{
    // Enter the Todo Cnntent provided in feature file
    todoPage.enterContentValue(todoContent);
})

When('I enter the date {string}',(todoDate)=>{
    // Enter the date provided in feature file
    todoPage.enterDateValue(todoDate);
})

And('I click on Create Todo button',()=>{
    todoPage.clickCreateButton();
})

Then('Create Todo button should not be active',()=>{
    // verifying Create todo button is disabled
    cy.get('[type="submit"]').should('be.disabled');
})

Then('I should be able to see the Todo in the list',(datatable)=> {

    const currentDate = todoPage.createdDate();
    datatable.hashes().forEach(element =>{
        //comparing Todo content and due Date given in the feature file with the list visible on the application
        const todoDate = todoPage.todoDate(element.dueDate);
        cy.get('body > my-app > div > div.column-three-quarter > table > tbody > tr').then((items)=> {
            expect(items[0]).to.contain.text(element.todo);
            expect(items[0]).to.contain.text(currentDate);
            expect(items[0]).to.contain.text(todoDate);
        })
    })
})

Then('Todo should not be added to the list',()=> {
    
    cy.get('body > my-app > div > div.column-three-quarter > table > tbody').should('have.text', '');
    //cy.get('body > my-app > div > div.column-three-quarter > table > tbody').children().should('have.length', 0);
})

Then('Todo should be added to the list',()=> {
    
    cy.get('body > my-app > div > div.column-three-quarter > table > tbody').contains('Todo_Item_1');
    //cy.get('body > my-app > div > div.column-three-quarter > table > tbody').children().should('have.length', 0);
})

When('I clear the search form',()=>{
    searchPage.clearSearchForm()
})



Then('I should be able to see no results',()=>{
    // verifying the "Not Found." lable on the screen after the search
    cy.get('body > app-root > div > div > div > div:nth-child(5)').invoke('text').then((text1) => {
        expect(text1).to.be.eq('Not found.')
    })
})

When('I select search for the Planet {string}',(planetName)=>{
    // search with the planet name provided in feature file
    searchPage.planetSearch(planetName)
})

When('I press enter search for the Planet {string}',(planetName)=>{
     // search with the planet name provided in feature file by pressing enter
    searchPage.searchPlanetWithEnter(planetName)
})


When('I select search for an invalid Planet {string}',(inavlidPlanet)=>{
    // search with the planet name provided in feature file
    searchPage.planetSearch(inavlidPlanet)
})

Then('I should be able to see Planet details',(datatable)=> {
    datatable.hashes().forEach(element =>{
        //comparing planet name given in the feature file with the planet name searched on the application
        cy.get('body > app-root > div > div > div > div > div > div > app-planet > div > div > h6').invoke('text').then((planetName)=> {
            expect(planetName).to.be.eq(element.name)
        })
        //comparing attributes given in the feature file with the displayed lable on the application
        cy.get('[class="col-sm-2"]').then((items)=> {
            expect(items[0]).to.contain.text('Population:')
            expect(items[1]).to.contain.text('Climate:')
            expect(items[2]).to.contain.text('Gravity:')
        })
        //comparing attributes given in the feature file with the searched results on the application
        cy.get('[class="col-sm-10"]').then((items)=> {
            expect(items[0]).to.contain.text(element.population)
            expect(items[1]).to.contain.text(element.climate)
            expect(items[2]).to.contain.text(element.gravity)
        })
    })
})

When('I enter search for the Character {string}',(CharName)=>{
    // search with the character name provided in feature file by pressing enter
    searchPage.searchPeopleWithEnter(CharName)
})

When('I select planets radio button',()=>{
    searchPage.selectPlanetRadioButton()
})

When('I select people radio button',()=>{
    searchPage.selectPeopleRadioButton()
})

When('I select search for a valid charcter name {string}',(charName)=>{
    searchPage.characterSearch(charName)
    cy.wait(5000)
})

When('I select search for a valid planet name {string}',(planetName)=>{
    searchPage.planetSearch(planetName)
    cy.wait(5000)
})

Then('I should be able to see multiple results',()=>{
    // verifying multiple result displays
    cy.wait(3000)
    cy.get('.card').its('length').should('be.greaterThan',1)
    
})
