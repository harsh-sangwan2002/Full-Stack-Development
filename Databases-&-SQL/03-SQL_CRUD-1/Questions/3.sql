/* YOUR QUERY GOES HERE
   Example: SELECT * FROM employees; 
*/
Select 
    emp_id, name, salary, salary+round(salary*0.20) As New_salary
From 
    employees
Order By
    emp_id;