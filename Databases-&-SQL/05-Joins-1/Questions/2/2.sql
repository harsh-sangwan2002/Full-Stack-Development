/*Problem Statement:

Write a query to find details of the employees who work in the 'Human Resources' department.

Return the columns 'employee_id', 'department_id', 'first_name', 'last_name', 'job_id', and 'department_name'.
Return the result ordered by employee_id in ascending order.
*/

Select 
    e.employee_id,
    e.department_id,
    e.first_name,
    e.last_name,
    e.job_id,
    d.department_name
From 
    employees e
Join
    departments d 
On
    e.department_id = d.department_id And
    d.department_name = "Human Resources"
Order By
    e.employee_id;