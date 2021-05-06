DROP TABLE IF EXISTS items;

CREATE TABLE items (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
weight INTEGER  NOT NULL,
image VARCHAR(300) NOT NULL
);

INSERT INTO items 
(name, weight, image)
VALUES
('Shoes',740,'https://media.kohlsimg.com/is/image/kohls/mens-shoes-sl-hs-20210303-nav_03?scl=1&fmt=pjpeg'),
('Sandals',400,'https://s7d9.scene7.com/is/image/JCPenney/DP0517201911013305M?resmode=sharp2&op_sharpen=1&wid=350&hei=350'),
('Hoodie',300,'https://i.pinimg.com/originals/e6/c0/d8/e6c0d835cc9727e8f521a273f9c4030e.jpg'),
('T-shirt',250,'https://images-na.ssl-images-amazon.com/images/I/41gjcddTYgL._AC_.jpg'),
('Short',200,'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwfe027638/images/hi-res/57826_FGE.jpg?sw=1600&sh=1600&sfrm=png&q=80&bgcolor=f6f6f6'),
('Hat',100,'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1554410456-best-hats-6-1554410450.jpg?crop=1xw:1xh;center,top&resize=480:*'),
('Wind-breaker',800,'https://cdn.shopify.com/s/files/1/0055/1242/products/EXP24YWZ-BKGP_2048x.jpg?v=1582049235'),
('Running-shoes',700,'https://hip2save.com/wp-content/uploads/2020/06/asics-gray-and-yellow-shoes.jpg?resize=1024%2C538&strip=all'),
('Boots',1000,'https://pyxis.nymag.com/v1/imgs/a21/ecb/da924ea13eca9c02446823fed213a52bbb-work-boots-01.2x.rsquare.w600.jpg');

SELECT * FROM items;