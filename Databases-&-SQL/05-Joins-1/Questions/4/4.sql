/* Problem Statement:

Display the details of those employees who have a manager working in the department that is US (i.e., country_id) based.

Note:

Return the columns employee_id, first_name, and last_name.
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
    e.manager_id = m.employee_id
Join 
    departments d 
On 
    m.department_id = d.department_id
Join 
    locations l 
On
    d.location_id = l.location_id And
    l.country_id = "US"
Order By
    e.employee_id