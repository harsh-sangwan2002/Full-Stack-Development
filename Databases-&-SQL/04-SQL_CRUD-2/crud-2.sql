Select * from sakila.film;

/* 1. Movies released between 2007 and 2009 [2007,2009] */
Select * From sakila.film Where release_year>=2006 And release_year<=2009;

Select * from film
Where release_year Between 2006 And 2009;

/* 1. Film having "loves" as a substring Using like does pattern match. */
Select * from film
Where title Like "%love%";

/* Null means nothing and you can't compare nothing to anything */
Insert Into film (title,description,release_year,language_id,original_language_id,rental_rate,length,replacement_cost,rating,special_features)
Values
('The Dark Knight',null,2008,1,3,4.99,152,19.99,'PG-13','Trailers'),
('The Dark Knight Rises',null,2012,1,3,4.99,152,19.99,'PG-13','Trailers'),
('The Dark Knight Returns',null,2016,1,3,4.99,152,19.99,'PG-13','Trailers');

-- This comparison doesn't work
Select * from film
Where description = Null;

-- Correct way
Select * from film
Where description Is Null;

-- OrderBy clause -> By default it is ascending
-- desciption works as a tie breaker
-- By default tie-breaker is primary key
Select * from film
order By release_year, description desc;

/*
If you have distinct in the select statement,then you can only sort by the columns that are present in the select statement.
*/
Select distinct release_year, title From film
Order By release_year;

/*
Umang 2000
Umang 1999
Umang 2012
*/

/* Limit is used to limit the no of rows in the output */
Select * from film 
limit 10 offset 100;

-- Update is to update the data already present in the table
Update film
Set title = "Skylags", release_year = 2000
Where film_id = 1;

Select * from film;

-- Delete is used to delete the data from the table
-- Truncate will also delete all the rows and there is no where clause in truncate
-- Drop will also delete the schema of the table
-- Truncate is faster than the delete operator
Delete from payment Where customer_id = 1;