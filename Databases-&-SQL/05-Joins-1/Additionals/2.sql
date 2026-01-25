/*
Problem Statement:

Extract the details of the employees who work under the same manager.

Return the details along with the manager's full name (first name, last name separated by space) as 'Manager' and the employee's full name (first name, last name separated by space) as 'Employee'.

Order the output based on manager_id and 'Employee' in ascending order.

Return the columns 'manager_id', 'Manager', 'Employee'.
Use the employees table.
*/

Select 
    e.manager_id,
    Concat(m.first_name," ",m.last_name) As Manager,
    Concat(e.first_name," ",e.last_name) As Employee
From 
    employees e 
Join
    employees m 
On
    e.manager_id = m.employee_id
Order By
    e.manager_id,
    Employee;