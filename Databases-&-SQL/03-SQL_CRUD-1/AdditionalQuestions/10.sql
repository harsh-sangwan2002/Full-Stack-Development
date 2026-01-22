/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    movie_title
From 
    Movies
Where
    genre Not In ("Romance","Drama")
Order By
    movie_id;