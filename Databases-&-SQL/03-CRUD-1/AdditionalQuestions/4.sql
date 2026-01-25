/* YOUR QUERY GOES HERE
   Example: SELECT * FROM movies; 
*/
Select
    original_title,
    popularity
From 
    movies
Where
    genres Like "%Horror%"
Order By
    popularity desc;