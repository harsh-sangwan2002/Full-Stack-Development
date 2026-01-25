/*
Consider a database with the following tables:

Sales: sale_id (Integer, Primary Key), product_id (Integer), customer_id (Integer), employee_id (Integer), sale_amount (Integer)

Products: product_id (Integer, Primary Key), product_name (Text), category_id (Integer)

Customers: customer_id (Integer, Primary Key), customer_name (Text), city (Text)

Employees: employee_id (Integer, Primary Key), employee_name (Text), department_id (Integer)

Write an SQL query to fetch the names of the employees who sold ‘Laptop’.

Return the output ordered by employee_name in ascending order.
*/

select distinct e.employee_name
from Sales s
join Products p on s.product_id = p.product_id
join Employees e on s.employee_id = e.employee_id
where p.product_name = 'Laptop'
order by e.employee_name;