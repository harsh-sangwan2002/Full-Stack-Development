CREATE DATABASE scaler;
USE scaler;

CREATE TABLE BATCHES(
batch_id INT Primary Key,
batch_name VARCHAR(60) DEFAULT "NEW_BATCH"
);

INSERT INTO BATCHES VALUES
(1,"Batch-A"),
(2,"Batch-B");

INSERT INTO BATCHES (batch_id) VALUES
(3),
(4);
