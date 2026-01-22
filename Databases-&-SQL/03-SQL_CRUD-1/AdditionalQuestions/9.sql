/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    order_id
From    
    Orders
Where
    customer_id = 1 And
    order_status In ("Shipped","Delivered")
Order By
    order_id;