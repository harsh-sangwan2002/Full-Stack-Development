/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    *
From 
    Customers
Where
    Concat(first_name, " ", last_name) != 'John Smith' And
    (first_name = 'John' or last_name = 'Smith')
Order By
    customer_id;