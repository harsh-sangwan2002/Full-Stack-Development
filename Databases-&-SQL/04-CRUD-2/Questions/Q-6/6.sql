/*
In the context of managing data for an Olympic event, you are tasked with sorting a table of countries based on their medal counts. The goal is to determine the ranking of countries by their performance in the Olympics, prioritizing gold, silver, and bronze medals, respectively.

Write an SQL query that sorts the olympic table according to the following rules:

The country with more gold medals should come first.
If there is a tie in the no. of gold medals, the country with more silver medals should come first.
If there is a tie in the no. of silver medals, the country with more bronze medals should come first.
If there is a tie in the no. of bronze medals as well, then the countries with the tie are sorted in ascending order lexicographically.
*/
Select 
    *
From 
    olympic
Order By
    gold_medals desc,
    silver_medals desc,
    bronze_medals desc,
    country;