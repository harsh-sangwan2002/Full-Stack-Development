/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    distinct customer_id
From 
    customers
Where
    revenue > 0 and
    year = 2021;
