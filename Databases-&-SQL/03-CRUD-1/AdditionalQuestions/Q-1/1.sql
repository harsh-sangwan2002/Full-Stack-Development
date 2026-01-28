/*
Write a query to display the titles of the movies that are released (i.e., release_year) after 2014 and have an average vote rating (i.e.,vote_average) greater than 7.

Result:

Return the column 'original_title'.
Return the result ordered by original_title in ascending order. 
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