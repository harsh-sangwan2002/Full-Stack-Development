/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    tweet_id
From 
    tweets
Where 
    length(content) > 15
Order By
    tweet_id;