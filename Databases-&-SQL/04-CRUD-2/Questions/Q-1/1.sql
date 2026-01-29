/*
To gain insights into audience tastes, Acme Studios wants to identify the most popular movies in their database. This can be achieved by analyzing the "popularity" field within the "movies" table.

Write a query to find the movie titles, taglines, and directors for the top 5 popular movies.

Result:

Return the columns 'original_title', 'tagline', and 'director'.
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