/*
Write an SQL query that reports the spending of each user.

Return the resulting table ordered by spending in descending order. In case of a tie, order them by user_id in ascending order.

The query result format is shown below in the following example.

Table: sales
*/

Select 
    s.user_id,
    Sum(quantity*price) As spending
From 
    sales s
Join
    product p
On
    s.product_id = p.product_id 
Group By
    s.user_id
Order By
    spending desc,
    s.user_id;