Feature: Verify the Todo List functionality on the application

    I want to verify different Tod List flows of the appliation

    Scenario: Verify list of Todos is ordered by Due date ascending
        Given Application is running
        When I create multiple Todos
        |todo|dueDate|
        |A_Todo_Item|07/21/2022|
        |B_Todo_Item|05/15/2022|
        |C_Todo_Item|07/18/2022|
        Then I should be able to see the Todo listed in ascending order of due dates

    Scenario: Verify list of Todos is ordered alphabetically by content values when Due dates are same
        Given Application is running
        When I create multiple Todos
        |todo|dueDate|
        |A_Todo_Item|07/15/2022|
        |B_Todo_Item|07/15/2022|
        |C_Todo_Item|07/15/2022|
        Then I should be able to see the Todo listed alphabetically