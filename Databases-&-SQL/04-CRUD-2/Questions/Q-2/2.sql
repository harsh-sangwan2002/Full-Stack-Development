/* Write a query to find the ids of products that are both low-fat and recyclable.
Return the result table ordered by product_id in ascending order.
*/
Select 
    product_id
From 
    products 
Where
    low_fats = 'Y' And
    recyclable = 'Y'
Order By
    product_id;