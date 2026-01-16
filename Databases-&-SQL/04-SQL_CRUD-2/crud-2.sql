use sakila;

select * from film;

-- select movies between year 2000 and 2009
select * from film 
where release_year >= 2000 and release_year <=2010;

-- using between
-- between a and b => [a,b] including a and b
select * from film
where release_year between 2000 and 2010;

/*
I want to fetch all films having love as substring in the title
*/
select * from film
where title like '%love%';

-- null and Is null
Insert Into film (title, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features)
Values('The Dark Knight', 2010, 1, 6, 0.19, 60, 30.01, 'PG', 'Commentaries'),
('The Dark Knight', 2010, 1, 6, 0.19, 60, 30.01, 'PG', 'Commentaries'),
('The Dark Knight', 2010, 1, 6, 0.19, 60, 30.01, 'PG', 'Commentaries');

select * from film
where description Is null;

/* 
order by 
asc - ascending (by default)
desc - descending
*/
select * from film
order by title desc;

select * from film
order by release_year desc, description desc;

-- distinct with order by
select distinct title, release_year from film
order by release_year;

-- limit is used to limit the number of rows in the output
select * from film
limit 10 offset 10;

-- update
Update film
set title = 'SkyLags', description = 'Description'
where film_id = 1;

SET SQL_SAFE_UPDATES = 0;

-- delete is used to delete rows from the table
select * from payment;
delete from payment; -- Going to delete all the rows from the table