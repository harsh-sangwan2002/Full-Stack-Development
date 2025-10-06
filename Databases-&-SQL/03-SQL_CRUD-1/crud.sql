USE sakila;

Select * From film;

Select title As film_title, description from film;

Select Distinct rating from film;

Select Distinct rating, release_year from film;

Select title,'Hello World' from film;

Select title, Round(length/60) from film;

Select * From film Where rating="PG-13" And release_year=2006;

Select * From film Where rating="PG-13" Or release_year=2006;

Select * From film Where rating IN ("PG-13","R");

Select * From film Where rating NOT IN ("PG-13","R");

Select count(*) From film;
-- ! = <> 