/*
Write an SQL query to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.

Return the resultant table ordered by tweet_id in ascending order.

Note: Use the length(column_name) function to find the length of the string.
*/
Select 
    tweet_id
From 
    tweets
Where 
    length(content) > 15
Order By
    tweet_id;