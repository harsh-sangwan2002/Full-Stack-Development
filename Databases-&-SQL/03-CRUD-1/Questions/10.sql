/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    *
From 
    Products
Where
    (category = "Electronics" And price > 500) Or
    (category = "Apparel" And price < 50)
Order By
    product_id;