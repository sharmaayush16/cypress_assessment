Feature: Verify the Create Todo functionality

    I want to verify different flows of the appliation

    Scenario: Verify user is not allowed to create a Todo when Content field is epmty
        Given Application is running
        When I enter the date "10/10/2022"
        Then Create Todo button should not be active

    Scenario: Verify that user is allowed to create a Todo when Content field has a single character
        Given Application is running
        When I enter the Todo Content "T"
        And  I enter the date "10/10/2022"
        And  I click on Create Todo button
        Then I should be able to see the Todo in the list
        |todo|dueDate|
        |T|10/10/2022|

    Scenario: Verify that the user is allowed to create a Todo when Content field has a valid value
        Given Application is running
        When I enter the Todo Content "Todo_Item_1"
        And  I enter the date "05/12/2022"
        And  I click on Create Todo button
        Then I should be able to see the Todo in the list
        |todo|dueDate|
        |Todo_Item_1|05/12/2022|

    Scenario: Verify that the user is allowed to create a Todo when Content field has 100 character
        Given Application is running
        When I enter the Todo Content "Todo_Item_11234567890!@£$%^&*()_+:~{{}[]:; |<>,./Aqwertyuioplk1234567890!@£$%^&*()_+o~{}}[]: 0<>,./Aqwertyuioo"
        And  I enter the date "07/11/2022"
        And  I click on Create Todo button
        Then I should be able to see the Todo in the list
        |todo|dueDate|
        |Todo_Item_11234567890!@£$%^&*()_+:~{{}[]:; |<>,./Aqwertyuioplk1234567890!@£$%^&*()_+o~{}}[]: 0<>,./A|07/11/2022|
    
    Scenario: Verify that the user is not allowed to create a Todo when Content field has more than 100 character
        Given Application is running
        When I enter the Todo Content "Todo_Item_11234567890!@£$%^&*()_+:~{{}[]:; |<>,./Aqwertyuioplk1234567890!@£$%^&*()_+o~{}}[]: 0<>,./AqwertyuioplkJHgv"
        And  I enter the date "07/11/2022"
        And  I click on Create Todo button
        Then Todo should not be added to the list
        
    