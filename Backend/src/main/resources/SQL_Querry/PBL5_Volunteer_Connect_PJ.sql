CREATE TABLE `Accounts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `account` varchar(255),
  `password` varchar(255),
  `name` varchar(255),
  `avatar` varchar(255),
  `status` boolean,
  `role` int,
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `Users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `account_id` int,
  `tel` varchar(255),
  `address` varchar(255),
  `gender` varchar(255),
  `birthday` date
);

CREATE TABLE `LikePosts` (
  `user_id` int,
  `post_id` int,
  `createdAt` date,
  PRIMARY KEY (`user_id`, `post_id`)
);

CREATE TABLE `Posts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `activity_id` int,
  `title` varchar(255),
  `image` varchar(255),
  `content` mediumtext,
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `Activities` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `image` varchar(255),
  `email` varchar(255),
  `name` varchar(255),
  `type` int,
  `deadline` date,
  `date_start` date,
  `date_end` date,
  `location` varchar(255),
  `organization_id` int,
  `createdAt` date,
  `updateAt` date,
  `isDeleted` boolean,
  `content` varchar(255)
);

CREATE TABLE `PostComments` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `comment_parent_id` int,
  `post_id` int,
  `content` varchar(255),
  `account_id` int,
  `createdAt` date,
  `updatedAt` date,
  `isDeleted` boolean
);

CREATE TABLE `RegistrationForms` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `activity_id` int,
  `user_id` int,
  `isConfirmed` boolean,
  `createdAt` date
);

CREATE TABLE `Candidates` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `activity_id` int,
  `certificate` varchar(255),
  `date_earn_certificate` date,
  `createdAt` date
);

CREATE TABLE `Chats` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sender_id` int,
  `receiver_id` int,
  `content` varchar(255),
  `createdAt` date
);

CREATE TABLE `Notifications` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `status` varchar(255),
  `account_id` int,
  `content` varchar(255),
  `createdAt` date
);

CREATE TABLE `TableTasks` (
  `id` int PRIMARY KEY AUTO_INCREMENT, 
  `activity_id` int,
  `name` varchar(255),
  `color` varchar(255),
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `Tasks` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `date_start` date,
  `date_end` date,
  `description` varchar(255),
  `title` varchar(255),
  `status` varchar(255),
  `table_task_id` int,
  `candidate_id` int,
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `TaskComments` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `comment_parent_id` int,
  `content` varchar(255),
  `task_id` int,
  `account_id` int,
  `createdAt` date,
  `updatedAt` date
);

ALTER TABLE `Candidates` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `RegistrationForms` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Tasks` ADD FOREIGN KEY (`table_task_id`) REFERENCES `TableTasks` (`id`);

ALTER TABLE `RegistrationForms` ADD FOREIGN KEY (`activity_id`) REFERENCES `Activities` (`id`);

ALTER TABLE `Users` ADD FOREIGN KEY (`account_id`) REFERENCES `Accounts` (`id`);

ALTER TABLE `Posts` ADD FOREIGN KEY (`activity_id`) REFERENCES `Activities` (`id`);

ALTER TABLE `Candidates` ADD FOREIGN KEY (`activity_id`) REFERENCES `Activities` (`id`);

ALTER TABLE `Activities` ADD FOREIGN KEY (`organization_id`) REFERENCES `Accounts` (`id`);

ALTER TABLE `PostComments` ADD FOREIGN KEY (`comment_parent_id`) REFERENCES `PostComments` (`id`);

ALTER TABLE `PostComments` ADD FOREIGN KEY (`account_id`) REFERENCES `Accounts` (`id`);

ALTER TABLE `PostComments` ADD FOREIGN KEY (`post_id`) REFERENCES `Activities` (`id`);

ALTER TABLE `Notifications` ADD FOREIGN KEY (`account_id`) REFERENCES `Accounts` (`id`);

ALTER TABLE `TableTasks` ADD FOREIGN KEY (`activity_id`) REFERENCES `Activities` (`id`);

ALTER TABLE `Tasks` ADD FOREIGN KEY (`candidate_id`) REFERENCES `Candidates` (`id`);

ALTER TABLE `TaskComments` ADD FOREIGN KEY (`comment_parent_id`) REFERENCES `TaskComments` (`id`);

ALTER TABLE `TaskComments` ADD FOREIGN KEY (`task_id`) REFERENCES `Tasks` (`id`);

ALTER TABLE `TaskComments` ADD FOREIGN KEY (`account_id`) REFERENCES `Accounts` (`id`);

ALTER TABLE `Chats` ADD FOREIGN KEY (`sender_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Chats` ADD FOREIGN KEY (`receiver_id`) REFERENCES `Users` (`id`);

ALTER TABLE `likePosts` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

ALTER TABLE `likePosts` ADD FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`);