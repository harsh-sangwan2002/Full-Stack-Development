/*
Write a query to calculate the sub_total for each order line and return the columns orderNumber, productCode, and sub_total. 
*/
Select 
    orderNumber, 
    productCode,
    round(quantityOrdered*priceEach,2) as sub_total
From 
    orderDetails 
Order By 
    orderNumber, sub_total Desc;