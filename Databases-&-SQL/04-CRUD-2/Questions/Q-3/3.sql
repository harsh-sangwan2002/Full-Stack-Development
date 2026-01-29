/*
Write a query to fetch customer details like customerName, phone, addressLine1, city, state, and postalCode who are not from Germany.
Return the result ordered by customerName in ascending order.
*/
Select 
    customerName,
    phone,
    addressLine1,
    city,
    state,
    postalCode
From 
    customers
Where
    country <> "Germany"
Order By
    customerName;