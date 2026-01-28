/*
Write an SQL query to fetch the names of the customer that are not referred by the customer with id = 102.
*/
Select
    name
From 
    customer
Where
    referee_id <> 102;