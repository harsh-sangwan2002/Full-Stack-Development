use sakila;

select count(*) from film_actor;

select count(*) from film
join film_actor
on true;

select count(*) from film
join film_actor
on film.film_id = film_actor.film_id;

-- For every film, I want to print the film_name and it's language
select film.title, language.name
from film join language
on film.film_id = language.language_id;

Select f.film_id, f.title, a.first_name, l.name
from film f
join film_actor fa
on f.film_id = fa.film_id
join language l
on f.language_id = l.language_id
join actor a 
on fa.actor_id  = a.actor_id;

