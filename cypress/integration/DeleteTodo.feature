Feature: Verify the Delete functionality on the application

    I want to verify different delete Todo List flows of the appliation

    Scenario: Verify Todo item is deleted from the list when Delete button is clicked
        Given Application is running
        And   Todo Item is added in the list
        |todo|dueDate|
        |A_Todo_Item|07/21/2022|
        |B_Todo_Item|05/15/2022|
        |C_Todo_Item|07/18/2022|
        When  I click on Delete button
        Then  The Todo Item must be removed from the list

    Scenario: Verify Todo item is removed from the persisted memory after delete action
        Given Application is running
        And   Todo Item is added in the list
        |todo|dueDate|
        |A_Todo_Item|07/21/2022|
        |B_Todo_Item|05/15/2022|
        |C_Todo_Item|07/18/2022|
        When  I click on Delete button
        Then  The Todo Item must be removed from the list
        And   The Todo Item must be removed from the persisted memory
    
    Scenario: Verify Todo item is removed from the persisted memory after delete action
        Given Application is running
        And   Todo Item is added in the list
        |todo|dueDate|
        |A_Todo_Item|07/21/2022|
        |B_Todo_Item|05/15/2022|
        |C_Todo_Item|07/18/2022|
        When  I Select the Done Checkbox
        And   Click on Clear Completed button
        Then  The Todo Item must be removed from the list