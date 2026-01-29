/*
country is the primary key for this table.
Each row in this table shows a country name and the number of gold, silver, and bronze medals it won in the Olympic games.

The Olympic table is sorted according to the following rules:
The country with more gold medals comes first.
If there is a tie in the gold medals, the country with more silver medals comes first.
If there is a tie in the silver medals, the country with more bronze medals comes first.
If there is a tie in the bronze medals, the countries with the tie are sorted in ascending order lexicographically.

Write an SQL query to sort the Olympic table
The query result format is shown in the following example.
*/
Select 
    *
From 
    Olympic
Order By
    gold_medals Desc,
    silver_medals Desc,
    bronze_medals Desc,
    country;