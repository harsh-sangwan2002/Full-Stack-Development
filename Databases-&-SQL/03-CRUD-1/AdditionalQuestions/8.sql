/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    customer_name
From 
    Customers
Where
    last_purchase_date < '2023-01-01'
Order By
    customer_id;