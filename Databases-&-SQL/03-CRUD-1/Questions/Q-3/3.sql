/*
Write a SQL query to create a new column named "New_salary" within their "employees" table. This column will reflect the adjusted salary after applying a 20% raise to the current salary ("salary").

Steps to calculate the salary increment:

Multiply the current salary by the percentage of the increment.
Divide the result by 100.
Then add the result to the current salary.
Name the column as 'New_Salary'
Round off the 'New_salary'. Use Round() for this.

Result:

Return the columns emp_id, name, salary, and 'New_salary'.
Order the output by the emp_id in ascending order.
*/
Select 
    emp_id, name, salary, salary+round(salary*0.20) As New_salary
From 
    employees
Order By
    emp_id;