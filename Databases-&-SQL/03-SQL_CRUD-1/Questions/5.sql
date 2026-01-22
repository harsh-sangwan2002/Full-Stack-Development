/* YOUR QUERY GOES HERE
   Example: SELECT * FROM employees; 
*/
Select 
    *
From 
    job_history
Where
    employee_id <> 101
Order By
    employee_id, job_id;