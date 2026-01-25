/*
Consider a database with the following tables:

Sales: sale_id (Integer, Primary Key), product_id (Integer), customer_id (Integer), employee_id (Integer), sale_amount (Integer)

Products: product_id (Integer, Primary Key), product_name (Text), category_id (Integer)

Customers: customer_id (Integer, Primary Key), customer_name (Text), city (Text)

Employees: customer_id (Integer, Primary Key), customer_name (Text), city (Text)

Write an SQL query to fetch the names of the top 2 products which had the highest sale_amount.
*/

Select 
    p.product_name,
    s.sale_amount
From 
    Sales s
Join
    Products p 
On
    s.product_id = p.product_id
Order By
    s.sale_amount desc
Limit 
    2;