SELECT * FROM category;

Select * from actor;

/*
* -> select all the rows and columns
*/

Select title from film;

Select title, description as custom_name from film;

Select film_id as id from film;

Select title as film_name, film_id as id from film;

-- Distinct
Select Distinct rating from film;

Select Distinct release_year, rating from film;

Select 1;

Select title, 'Hello World' from film;

Select 1 from film;

-- For each film get the title and duration in hours
Select title, length/60 as duration_in_hours from film;
Select title, floor(length/60) as duration_in_hours from film; 
Select title, round(length/60) as duration_in_hours from film;  

Select * from city;

-- I want to create a new table with city columns and insert all cities from this city table
Create table city_copy(
name varchar(100)
);

Insert into city_copy(name)
select city from city;

-- Where clause
Select title, rating from film
Where rating = "PG-13";

-- Like
Select title from film
where title like 'a%';

-- Not Equal -> != & <>
Select * from film
where rating != 'PG-13';

Select * from film
where rating <> 'PG-13';

Select * from film
where release_year >= 1990 and release_year <= 2009;

Select * from film
where rating = 'PG-13' or rating = 'G' or rating = 'PG';

Select * from film
where rating IN ("PG-13", "G", "PG");

Select * from film
where rating NOT IN ("PG-13", "G", "PG");