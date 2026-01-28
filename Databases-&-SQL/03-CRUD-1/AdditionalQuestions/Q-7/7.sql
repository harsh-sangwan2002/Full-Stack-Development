/*
Consider a database schema for movies with the following table:

Movies: movie_id (Integer, Primary Key), movie_title (Text), genre (Text), release_year (Integer)

Write an SQL query to retrieve the titles of movies released in 2000 or later that belong to the genres "Sci-Fi" or "Action."

Return the result ordered by movie_id in ascending order. 
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