/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
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