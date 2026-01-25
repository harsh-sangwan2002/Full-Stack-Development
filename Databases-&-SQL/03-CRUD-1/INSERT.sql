use sakila;

select * from film;
select count(*) from film;

-- I want to insert some rows in the film table 
Insert Into film (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features)
Values('The Dark Knight', 'Batman fights the joker', 2010, 1, 6, 0.19, 60, 30.01, 'PG', 'Commentaries');

/*
You have to give values in the same order as mentioned in the column names
You have to follow the same data type in the values as defined in the schema
If you don't define a column value there are two cases 
-> If column is nullable, the value will be null
-> If column is non-nullable and has default value defined, it will take the default value
-> If column is non-nullable and doesn't have a default as well, it will throw an error
*/

Insert into film (title)
Values ('The Dark Knight Rises');
