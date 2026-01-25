/*
Consider a database with the following tables:

Sales: sale_id (Integer, Primary Key), product_id (Integer), customer_id (Integer), employee_id (Integer), sale_amount (Integer)

Products: product_id (Integer, Primary Key), product_name (Text), category_id (Integer)

Customers: customer_id (Integer, Primary Key), customer_name (Text), city (Text)

Employees: employee_id (Integer, Primary Key), employee_name (Text), department_id (Integer)

Write an SQL query to retrieve the sale ID, product name, customer name, employee name, and sale amount for all sales. Include details about the product, customer, and employee.

Return the output ordered by sale_amount in descending order.
*/

Select 
    s.sale_id,
    p.product_name,
    c.customer_name,
    e.employee_name,
    s.sale_amount
From 
    Sales s 
Join
    Products p
On
    s.product_id = p.product_id
Join
    Customers c
On 
    s.customer_id = c.customer_id
Join
    Employees e 
On
    s.employee_id = e.employee_id
Order By
    s.sale_amount desc;