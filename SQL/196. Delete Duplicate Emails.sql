DELETE FROM Person
    WHERE ID NOT IN
    (
        SELECT MIN(ID) AS MINRecordID
        FROM Person
        GROUP BY email
    );