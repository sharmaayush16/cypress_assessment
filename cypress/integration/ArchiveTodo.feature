Feature: Verify the Archive functionality on the application

    I want to verify different archive Todo List flows of the appliation

    Scenario: Verify Todo item is removed from the list when Archive button is clicked
        Given Application is running
        And   Todo Item is added in the list
        |todo|dueDate|
        |A_Todo_Item|07/21/2022|
        |B_Todo_Item|05/15/2022|
        |C_Todo_Item|07/18/2022|
        When  I click on Archive button
        Then  The Todo Item must be removed from the list