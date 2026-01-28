/*
Write a query to find the details of those employees who work in the departments with numbers included in 30, 40, or 90.

Return the result ordered by employee_id in ascending order.
*/
Select 
    employee_id,
    first_name,
    job_id,
    department_id
From 
    employees
Where
    department_id In (30,40,90)
Order By
    employee_id;