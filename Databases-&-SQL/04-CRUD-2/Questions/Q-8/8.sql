/*
Write an SQL query to find all the authors that viewed at least one of their own articles.

Return the result table sorted by id in ascending order.
*/
Select 
    distinct author_id id 
From 
    views
Where
    author_id = viewer_id
Order By
    id;