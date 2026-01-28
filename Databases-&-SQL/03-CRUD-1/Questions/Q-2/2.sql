/*
Write an SQL query to report the unique customers with postive revenue in the year 2021.
Note: Use distinct operator to get unique values.
*/
Select 
    distinct customer_id
From 
    customers
Where
    revenue > 0 and
    year = 2021;
