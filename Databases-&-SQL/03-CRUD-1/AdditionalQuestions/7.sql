/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    movie_title
From 
    Movies 
Where
    release_year >= 2000 And
    genre In ("Sci-Fi","Action")
Order By
    movie_id;