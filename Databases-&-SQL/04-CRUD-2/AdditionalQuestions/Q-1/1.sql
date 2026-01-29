/*
Write a query to get the list of city names starting with vowels (i.e., a, e, i, o, or u) from station table.

The result should not contain duplicate values.

Return the result table ordered by city in ascending order. 
*/
Select 
    distinct city
From 
    station
Where
    city like 'a%' or
    city like 'e%' or
    city like 'i%' or
    city like 'o%' or
    city like 'u%'
Order By
    city;