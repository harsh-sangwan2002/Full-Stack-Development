/*
Write an SQL query that reports all the possible matches of the league. Note that every two teams play two matches with each other, with one team being the home_team once and the other time being the away_team.

The query result format is in the following example.

Return the output ordered by home_team in ascending order.

Table: teams
*/

Select 
    h.team_name As home_team,
    a.team_name As away_team
From 
    teams h 
Join
    teams a
On
    h.team_name != a.team_name 
Order By
    home_team;