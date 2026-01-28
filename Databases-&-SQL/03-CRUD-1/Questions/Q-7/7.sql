/*
A country is big if:

it has an area greater than 300000 km2, AND
it has a population greater than 20000000.

Write an SQL query to report the name, population, and area of the big countries.


Return the resultant table ordered by population in ascending order.
*/
Select 
    name, population, area
From 
    world
Where
    area > 300000 and
    population > 20000000
Order By
    population;