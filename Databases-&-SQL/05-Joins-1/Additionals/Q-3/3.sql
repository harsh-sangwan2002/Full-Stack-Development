/*
Context:

GlobalTech Solutions is a multinational company with thousands of employees spread across various departments.

The company's Human Resources (HR) department maintains a comprehensive database to manage employee information, including personal details, employment history, and departmental affiliations.

One common requirement from the HR department is to identify employees hired within specific date ranges for various activities like onboarding programs, salary reviews, or compliance reporting.

Problem Statement:

You have been asked to display the details of employees who were hired between the specified date '1998-01-01' and three months from that date.

The result should include the columns employee_id, first_name, last_name, salary, department_name, hire_date, and city.
The result should be ordered by employee_id in ascending order to maintain clarity and ease of reference.
Note: To get the three months interval, use the DATE_ADD() function and add the interval by 90 days from the given date (i.e., three months). 
*/

Select 
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary,
    d.department_name,
    e.hire_date,
    l.city
From 
    employees e
Join
    departments d 
On
    e.department_id = d.department_id
Join
    locations l 
On 
    d.location_id = l.location_id And
    e.hire_date between '1998-01-01' And date_add('1998-01-01', interval 90 day)
Order By
    e.employee_id