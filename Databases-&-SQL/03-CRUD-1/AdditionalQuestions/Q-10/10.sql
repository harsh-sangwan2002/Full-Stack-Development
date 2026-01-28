/*
Consider a database schema for movies with the following table:

Movies: movie_id (Integer, Primary Key), movie_title (Text), genre (Text)

Write an SQL query to retrieve the titles of movies that are not in the genres "Romance" or "Drama."

Return the output ordered by movie_id in ascending order.
*/
Select 
    movie_title
From 
    Movies
Where
    genre Not In ("Romance","Drama")
Order By
    movie_id;