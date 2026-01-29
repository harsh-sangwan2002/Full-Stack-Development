/*
Find the details of the movies that are released between the years 2012-2015 i.e., (Including 2012 and 2015).

Return the columns 'original_title', 'genres', 'vote_average', and 'revenue'.
Return the result ordered by original_title in ascending order.
*/
Select 
    original_title,
    genres,
    vote_average,
    revenue
From 
    movies
Where
    release_year Between 2012 And 2015
Order By
    original_title;