/* YOUR QUERY GOES HERE
   Example: SELECT * FROM movies; 
*/
Select 
    original_title
From 
    movies
Where
    release_year > 2014 And
    vote_average > 7
Order By
    original_title;