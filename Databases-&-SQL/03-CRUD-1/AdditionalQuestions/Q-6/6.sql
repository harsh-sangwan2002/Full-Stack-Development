/*
Write an SQL query to report the IDs of the low-quality problems. A LeetCode problem is low-quality if the like percentage of the problem (number of likes divided by the total number of votes) is strictly less than 60%.

Return the result table ordered by problem_id in ascending order.

The query result format is in the following example.
*/
Select 
    problem_id
From 
    Problems
Where
    likes/(likes+dislikes) < 0.6
Order By
    problem_id;