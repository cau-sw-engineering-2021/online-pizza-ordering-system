CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `nickname` varchar(255),
  `phone_num` varchar(255),
  `address` varchar(255),
  `email` varchar(255),
  `role` varchar(255)
);

CREATE TABLE `menu` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `price` int,
  `size` varchar(255),
  `detail` varchar(255),
  `img_location` varchar(255)
);

CREATE TABLE `item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `menu_id` int,
  `count` int
);

CREATE TABLE `option` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `price` int,
  `item_id` int
);

CREATE TABLE `order` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `last_update_time` timestamp,
  `order_status` varchar(255),
  `delivery_type` varchar(255),
  `total_price` int,
  `user_id` int
);

CREATE TABLE `order_item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `item_id` int,
  `order_id` int
);

CREATE TABLE `log` (pizzaorderpizzaorder
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `logging_time` timestamp,
  `nickname` varchar(255),
  `detail` varchar(255)
);

CREATE TABLE `cart_item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `item_id` int
);

ALTER TABLE `item` ADD FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`);

ALTER TABLE `option` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `order_item` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `order_item` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `cart_item` ADD FOREIGN KEY (`item_id`) REFERENCES `item` (`id`);

ALTER TABLE `cart_item` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
pizzavopizzavo