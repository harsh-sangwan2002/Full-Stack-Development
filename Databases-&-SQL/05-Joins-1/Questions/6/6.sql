/*
Write an SQL query to find the employee names (as 'Employee') who earn more than their managers.

Return the result table ordered by names.

Table : employee
*/

Select
    e.name As Employee
From
    employee e 
Join    
    employee m
On
    e.managerId = m.id And
    e.salary > m.salary 
Order By
    e.name