/* YOUR QUERY GOES HERE
   Example: SELECT * FROM departments; 
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