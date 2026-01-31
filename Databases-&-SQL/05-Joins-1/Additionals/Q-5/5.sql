/*
Consider the database with the following employees table:

Employees: employee_id (Integer, Primary Key), employee_name (Text), manager_id (Integer)

Write an SQL query to find employees who are also managers.

Return the output ordered by manager_name in descending order.
*/

Select
    distinct m.employee_name As manager_name
From 
    Employees e 
Join
    Employees m
On
    e.manager_id = m.employee_id
Order By
    manager_name desc;