/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    problem_id
From 
    Problems
Where
    likes/(likes+dislikes) < 0.6
Order By
    problem_id;