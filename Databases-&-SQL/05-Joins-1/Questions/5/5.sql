/* Problem Statement:

Display the details of the employees who had job titles like 'sales' in the past and the min_salary is greater than or equal to 6000.

Result:

Return the columns 'employee_id', 'department_name', 'job_id', 'job_title', and 'min_salary'.
Return the employee's current information for the columns 'employee_id', and 'department_name'.
Return the employee's past information for the columns 'job_id', 'job_title', and 'min_salary'.
Return the output ordered by employee_id and min_salary in ascending order.
NOTE:

To get the min_salary refer to the jobs table.
Refer to the job_history table to get the details of past jobs.
An employee might have worked in multiple jobs in the past whose record will be available in job_history.
If any employee hasn't worked in any jobs in the past, his record wouldn't be present in the job_history table.
*/

Select
    e.employee_id,
    d.department_name,
    j.job_id,
    j.job_title,
    j.min_salary
From 
    employees e
Join
    departments d 
On
    e.department_id = d.department_id
Join 
    job_history jh 
On
    e.employee_id = jh.employee_id
Join 
    jobs j
On 
    jh.job_id = j.job_id
And 
    j.min_salary >= 6000
And
    j.job_title like '%Sales%'
Order By
    e.employee_id,
    j.min_salary;