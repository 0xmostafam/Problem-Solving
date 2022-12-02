SELECT C.name as Customers
FROM Customers C
LEFT JOIN Orders O ON C.id = O.customerId
WHERE O.id IS NULL