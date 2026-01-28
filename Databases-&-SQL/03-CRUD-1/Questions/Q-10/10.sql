/*
Consider a database schema for products with the following table:

Products: product_id (Integer, Primary Key),product_name (Text),category (Text),price (Integer)

Write an SQL query to retrieve products that belong to the "Electronics" category and have a price greater than 500 or products that belong to the "Apparel" category and have a price less than 50.

Return the output ordered by product_id in ascending order.
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