/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
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