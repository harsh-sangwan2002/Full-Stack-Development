/*
Consider the database with the following employees table:

Employees: employee_id (Integer, Primary Key), employee_name (Text), manager_id (Integer)

Write an SQL query to find pairs of employees who have the same manager.

Return the output ordered by employee_name in ascending order.

Note: Make sure that the employee_id of employee1 is less than employee2 
*/
SELECT DISTINCT
    e1.employee_name AS employee1,
    e2.employee_name AS employee2,
    e3.employee_name as manager_name
FROM
    Employees e1
    JOIN Employees e2 ON e1.manager_id = e2.manager_id
    Join Employees e3 on e2.manager_id = e3.employee_id
WHERE
    e1.employee_id < e2.employee_id
ORDER BY
    employee1 ASC, employee2 ASC;