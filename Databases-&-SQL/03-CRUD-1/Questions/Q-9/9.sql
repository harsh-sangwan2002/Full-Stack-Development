/*
Consider a database schema for customers with the following table:

Customers: customer_id (Integer, Primary Key) ,first_name (Text), last_name (Text), email (Text)

Write an SQL query to search for customers whose first name is "John" or last name is "Smith," and full name is not ‘John Smith’.

Return the output ordered by customer_id in ascending order. 
*/
Select 
    *
From 
    Customers
Where
    Concat(first_name, " ", last_name) != 'John Smith' And
    (first_name = 'John' or last_name = 'Smith')
Order By
    customer_id;