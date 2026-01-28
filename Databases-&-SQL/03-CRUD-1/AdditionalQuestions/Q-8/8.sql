/*
Consider a database schema for customers with the following table:

Customers: customer_id (Integer, Primary Key), customer_name (Text), last_purchase_date (Date)

Write an SQL query to find the names of customers who have not made a purchase since January 1, 2023.

Return the results ordered by customer_id in ascending order.
*/
Select 
    customer_name
From 
    Customers
Where
    last_purchase_date < '2023-01-01'
Order By
    customer_id;