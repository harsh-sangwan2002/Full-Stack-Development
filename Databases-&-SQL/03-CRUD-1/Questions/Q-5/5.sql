/*
Write a query to get all the details of all the employees from job_history except for the employee with ID 101.

Result:

Return all the fields.
Return the result ordered by employee_id and job_id in ascending order. 
*/
Select 
    *
From 
    job_history
Where
    employee_id <> 101
Order By
    employee_id, job_id;