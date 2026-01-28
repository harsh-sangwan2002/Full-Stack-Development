/*
Write an SQL query to find the ids of products that are both low fat and recyclable.
Return the result table sorted by product_id in ascending order
The query result format is in the following example.
*/
Select 
    product_id
From 
    Products
Where
    low_fats = "Y" And
    recyclable = "Y"
Order By
    product_id;