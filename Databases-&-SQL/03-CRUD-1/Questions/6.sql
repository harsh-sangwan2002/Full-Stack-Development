/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
Select 
    *
From 
    Cinema
Where
    mod(id,2) <> 0 and 
    description != "boring"
Order By
    rating desc,
    id;