/*
Write a query to report the IDs of the low-quality problems.

A problem is low-quality if the like percentage of the problem (the number of likes divided by the total number of votes) is strictly less than 60%.

Return the result table ordered by problem_id in ascending order.
*/
Select 
    problem_id
From 
    problems
Where
    likes/(likes+dislikes) < 0.60
Order By
    problem_id;