/* Problem Statement:
Write a query to display the details of the employees who joined the company before their managers joined the company.

Result:
Return the columns 'employee_id', 'first_name', and 'last_name'.
Return the result ordered by employee_id in ascending order.
*/

Select 
    e.employee_id,
    e.first_name,
    e.last_name
From
    employees e
Join
    employees m 
On
    e.manager_id = m.employee_id And
    e.hire_date < m.hire_date 
Order By
    e.employee_id;