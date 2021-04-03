CREATE TABLE `users` (
  `username` varchar(10) PRIMARY KEY AUTO_INCREMENT,
  `password` varchar(10) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varbinary NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` varchar(255),
  `email` varchar(255) NOT NULL,
  `Role` varbinary
);

CREATE TABLE `matches` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `home` int,
  `away` int,
  `stadium` varchar(255),
  `match_date` Date NOT NULL,
  `match_time` Time NOT NULL,
  `main_referee` varchar(255) NOT NULL,
  `lineman_1` varchar(255) NOT NULL,
  `lineman_2` varchar(255) NOT NULL
);

CREATE TABLE `stadium` (
  `name` varchar(30) PRIMARY KEY,
  `number_of_rows` int NOT NULL,
  `number_of_seats_per_row` int NOT NULL
);

CREATE TABLE `seats` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `row` int NOT NULL,
  `column` int NOT NULL,
  `state` varbinary NOT NULL,
  `stadium` varchar(255),
  `user` varchar(255),
  `match` int
);

CREATE TABLE `team` (
  `id` int PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL
);

ALTER TABLE `matches` ADD FOREIGN KEY (`home`) REFERENCES `team` (`id`);

ALTER TABLE `matches` ADD FOREIGN KEY (`away`) REFERENCES `team` (`id`);

ALTER TABLE `matches` ADD FOREIGN KEY (`stadium`) REFERENCES `stadium` (`name`);

ALTER TABLE `seats` ADD FOREIGN KEY (`stadium`) REFERENCES `stadium` (`name`);

ALTER TABLE `seats` ADD FOREIGN KEY (`user`) REFERENCES `users` (`username`);

ALTER TABLE `seats` ADD FOREIGN KEY (`match`) REFERENCES `matches` (`id`);
