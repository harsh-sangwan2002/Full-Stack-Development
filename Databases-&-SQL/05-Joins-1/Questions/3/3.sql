/* Problem Statement:

Write a query to find all the people who viewed more than one article on the same date.

Save the viewer_id as the id.
Return the result sorted by id in ascending order.
*/

Select 
    distinct v1.viewer_id as id
From 
    views v1
Join
    views v2
On 
    v1.view_date = v2.view_date And
    v1.viewer_id = v2.viewer_id And 
    v1.article_id != v2.article_id
Order By
    id;