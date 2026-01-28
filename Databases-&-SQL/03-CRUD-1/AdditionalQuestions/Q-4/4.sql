/*
Display the details of the movies which belong to the 'Horror' genre.

Return the columns 'original_title', and 'popularity'.
Return the result ordered by the popularity in descending order.
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