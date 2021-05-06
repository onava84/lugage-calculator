INSERT INTO items
(name, weight, image)
VALUES
($1, $2, $3)
returning *;