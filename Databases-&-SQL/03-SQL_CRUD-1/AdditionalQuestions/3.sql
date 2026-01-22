/* YOUR QUERY GOES HERE
   Example: SELECT * FROM employees; 
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