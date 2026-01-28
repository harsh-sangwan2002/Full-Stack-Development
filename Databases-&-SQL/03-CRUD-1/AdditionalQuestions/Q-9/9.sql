/*
Consider a database schema for orders with the following table:

Orders: order_id (Integer, Primary Key), customer_id (Integer), order_status (Text)

Write an SQL query to retrieve the order IDs of orders placed by customer 1 that are either "Shipped" or "Delivered."

Return the output ordered by order_id in ascending order.
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