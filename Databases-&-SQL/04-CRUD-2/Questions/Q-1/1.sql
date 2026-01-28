/* YOUR QUERY GOES HERE
   Example: SELECT * FROM movies; 
*/
Select 
    original_title,
    tagline,
    director
From 
    movies 
Order By
    popularity desc
Limit
    5;