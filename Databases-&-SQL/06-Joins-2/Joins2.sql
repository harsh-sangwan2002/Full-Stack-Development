use sakila;

-- Using clause
Select * from film f
join film_actor fa
using (film_id);

Select * from film
Union
Select * from language;

-- Union removes the duplicates
Select film_id from film
Union
Select film_id from film_actor;

-- Union All returns all the rows including duplicates
Select film_id from film
Union All
Select film_id from film_actor;

Select last_update from language
Union
Select last_update from film_actor;

Create View t2 As
Select last_update from language
Union All
Select last_update from film_actor;

describe t2;

-- Can combine different column names and columns with different data-types as well
Create View t1 As
Select title from film
Union
Select actor_id from film_actor;

describe t1;