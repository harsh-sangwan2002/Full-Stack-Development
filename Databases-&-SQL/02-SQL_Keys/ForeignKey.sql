USE scaler;
Drop table batches;

CREATE TABLE batches(
	batch_id INT Primary Key,
	batch_name Varchar(50) Not Null
);

INSERT INTO BATCHES (batch_id, batch_name) VALUES
(1,'Batch A'),
(2,'Batch B'),
(3,'Batch C');

CREATE TABLE students(
	student_id INT Primary Key,
    first_name Varchar(50) Not Null,
    last_name Varchar(50) Not Null,
    batch_id INT,
    -- Do the same -> On cascade
    Foreign Key(batch_id) References batches(batch_id) On Delete Cascade On Update Cascade
);