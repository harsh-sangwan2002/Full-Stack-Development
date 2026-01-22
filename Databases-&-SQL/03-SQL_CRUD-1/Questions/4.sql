/* YOUR QUERY GOES HERE
   Example: SELECT * FROM orderdetails; 
*/
Select 
    orderNumber, 
    productCode,
    round(quantityOrdered*priceEach,2) as sub_total
From 
    orderDetails 
Order By 
    orderNumber, sub_total Desc;