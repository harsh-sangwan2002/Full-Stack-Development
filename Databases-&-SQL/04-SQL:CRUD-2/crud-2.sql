Select * from sakila.film;

Select * From sakila.film Where release_year>=2006 And release_year<=2009;
/*
1. Movies released between 2007 and 2009 [2007,2009]
*/
Select * from film
Where release_year Between 2006 And 2009;