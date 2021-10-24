## In a SQL table, what is the difference between information in a row and information in a column?
* information in a row is the complete object within the table and all its properties, in a column is a specific proptery that each row will contain within the table.
## Demonstrate the basic structure for creating a new table called characters with the values name, age, description as strings, and an int id.
* name VARCHAR(255) NOT NULL, age INT NOT NULL, description VARCHAR(255) NOT NULL, id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
## What is the difference between the following statements:

* DELETE FROM table_name; - deletes a specific item of the table depending on what is selected to be deleted but the table remains.
* DROP TABLE table_name; - deletes the table from the database altogether. 