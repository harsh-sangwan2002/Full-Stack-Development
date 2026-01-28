/*
Write an SQL query to report the movies with an odd-numbered ID and a description that is not "boring".

Return the result table ordered by rating in descending order and id in ascending order.

Note: Use the mod(column_name,number) function to find out an odd-numbered or even-numbered ID. 
*/
Select 
    *
From 
    Cinema
Where
    mod(id,2) <> 0 and 
    description != "boring"
Order By
    rating desc,
    id;