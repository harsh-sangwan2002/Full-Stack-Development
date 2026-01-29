/*
Write an SQL query to report the patient_id who have Type I Diabetes.

Patients with Type I Diabetes will have "DIAB1" as prefix in any of the words in the conditions data.

For example :
- Patient with conditions such as "DIAB100 ACNE FEVER" , "ACNE DIAB100 FEVER" are Type 1 Diabetic
- Patient with conditions such as "ACNEDIAB100 FEVER" , "ACNE FEVER" are not Type 1 Diabetic
Return the results ordered by patient_id in ascending order.
*/
Select
    patient_id
From 
    patients
Where
    conditions like 'Diab1%' or
    conditions like '% Diab1%'
Order By
    patient_id;