UPDATE items
SET
name = $2,
weight = $3,
image = $4
WHERE id = $1;