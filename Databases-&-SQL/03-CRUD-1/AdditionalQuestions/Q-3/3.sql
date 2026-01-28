/*
Write a query to find the employees whose officeCodes are not included in 4,6,7.

Return the result ordered by firstName and lastName in ascending order.
*/
Select 
    firstName,
    lastName,
    jobTitle
From 
    employees
Where
    officeCode Not In (4,6,7)
Order By    
    firstName, lastName;