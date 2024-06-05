-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2024 at 11:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pbl5_volunteer_connect_pj`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `account` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `isValid` tinyint(4) DEFAULT NULL,
  `backgroundNoAva` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `account`, `password`, `name`, `avatar`, `status`, `role`, `createdAt`, `updatedAt`, `isDeleted`, `isValid`, `backgroundNoAva`) VALUES
(1, 'Khoi', '$2a$10$/cR3zv0rQwrrtd7JlBPwLOFqB7t3cdkpmgr9GOAtsZ/Em.BpVdvcO', 'Nguyen Khoi', 'https://res.cloudinary.com/deei5izfg/image/upload/v1716608706/Mobile/ez18j2lszmeo6kl6eh9z.jpg', NULL, 1, '2024-04-24', '2024-05-13', 0, 1, '#3498db'),
(2, 'Tin', '$2a$10$dfkQOvalXUyL1VRZs8XYX.0a/gUprqMZSFyT0o5XSQIiljn9ryvjW', 'Pham Duy Tin', 'https://res.cloudinary.com/deei5izfg/image/upload/v1716608677/Mobile/anx5jax0nnga07ry0r1q.jpg', NULL, 1, '2024-04-24', '2024-04-27', 0, 1, '#e74c3c'),
(3, 'Dung', '$2a$10$H2E.tZYHymnyejg569RaL.MsezSJ7AjPXpaq/9yBhdg6T3A5OIDum', 'Van Dung', 'https://res.cloudinary.com/deei5izfg/image/upload/v1716570651/Mobile/venixshoyn4eixxbsbcg.jpg', NULL, 1, '2024-04-24', '2024-04-27', 0, 1, '#e67e22'),
(4, 'Vi', '$2a$10$pogIYQEKj/LyObMGehz58O24qs5R29NMJQGkbbrtb283jm5OM2vJi', 'Thuc Vi', 'https://res.cloudinary.com/deei5izfg/image/upload/v1716608648/Mobile/z7pmveezcuf60otw3eeo.jpg', NULL, 1, '2024-04-24', '2024-04-27', 0, 1, '#c0392b'),
(5, 'Truong', '$2a$10$4xByzKpnHc6Xk4cLX4BvTuB4Ox.9tW9zy5j9vE0tiZ0GrNkAjrt3O', 'Viet Truong1', NULL, NULL, 2, '2024-04-24', '2024-05-13', 0, 1, '#27ae60'),
(6, 'Quan', '$2a$10$OOuYKkHZdj93OAU8rfmabu7dVnMoRbGF4apI/bObDuURyz9Stflwy', 'Minh Quan', 'https://res.cloudinary.com/deei5izfg/image/upload/v1716608736/Mobile/qo4l6xivpel9bmbseeky.jpg', NULL, 2, '2024-04-24', '2024-04-27', 0, 1, '#8e44ad'),
(7, 'admin', '$2a$10$YFtOxWabqmqMW0h/rsMe6uP3mQmgYYyLbxh1zi7WP4VxTylO7hAsy', 'Administrator', NULL, NULL, 3, '2024-04-24', '2024-04-27', 0, 1, '#f39c12'),
(14, 'quan123', '$2a$10$.k6Li8HFEJLCoVteFpvPSeGmjwazbPlvqkTdTpPV7xkpgKs29WXrW', 'Tran Minh Quan', NULL, NULL, 2, '2024-05-04', '2024-05-04', 0, 1, '#d35400'),
(15, 'minh123', '$2a$10$sx4wj8nSq4P/wqaq0QG49uV9x2jIK9wFJBZXhbz8uxirWvHBVVQFS', 'Nhat Minh', NULL, NULL, 2, '2024-05-04', '2024-05-04', 0, 1, '#34495e'),
(16, 'admin123', '$2a$10$eTFQiDyIc6pHWvad7RIj0..DHZZ4Qsb8YVn9f9wMyFqJzjpD.18CK', 'Admin', NULL, NULL, 3, '2024-05-04', '2024-05-04', 0, 1, '#2c3e50'),
(17, 'admin1235', '$2a$10$ru0/6HhI.YjJ1aSjD2BcKuGTOWG7rC8nt6y8XOTTnK9ckPAcVUup6', 'Admin123', NULL, NULL, 3, '2024-05-09', '2024-05-09', 0, 1, '#1abc9c'),
(18, 'admin2', '$2a$10$p0Mgz7W/aBulDdo9ie/0JeEoZ3gTgaTaxNBi3N9tda.IQzekiFY6.', 'Admin123', NULL, NULL, 3, '2024-05-09', '2024-05-09', 0, 1, '#ecf0f1'),
(19, 'admin3', '$2a$10$tgtPvJqdlU94fQXU4zRU4OzLb2svEWHfQ.EX9VZbVni5UrjtC4S92', 'Admin123', NULL, NULL, 3, '2024-05-09', '2024-05-09', 0, 1, '#7f8c8d'),
(36, 'Nguyen Duy Tin2', '$2a$10$3642IHYbCk4iRLujOEHd7e2kfhBO3dYJYwFn46eu/YT8tfPel6pMu', 'Vo Viet Truong', NULL, NULL, 1, '2024-05-13', '2024-05-13', 0, 1, '#bdc3c7'),
(37, 'Nguyen121233n2', '$2a$10$jAcxS9Ffxl1t1vRj7WdBQe0trDQkyc8VYPj.JJ2nQZVbjxzRyx7Uu', 'Vo Viet Truong', NULL, NULL, 2, '2024-05-13', '2024-05-13', 0, 1, '#9b59b6'),
(38, 'vandung17022003@gmail.com', '$2a$10$X/AmqRCCitB5JV.1rS.kx.naicJ2p.Ba49fe05qdoymtdHAYTCw.S', 'Văn Dũng', NULL, NULL, 2, '2024-05-27', '2024-05-27', 0, 1, '#eadd38');

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `organization_id` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `image`, `email`, `name`, `type`, `deadline`, `date_start`, `date_end`, `country`, `location`, `organization_id`, `createdAt`, `updateAt`, `isDeleted`, `content`) VALUES
(1, 'https://nld.mediacdn.vn/291774122806476800/2022/1/18/13-chot-16425114907571291637527.jpg', 'volunteer_organization1@gmail.com', 'Environmental cleanup', 1, '2023-07-01', '2024-01-01', '2024-12-01', 1, 'Quang Nam Province', 5, '2023-06-01', '2024-04-24', 0, 'Join the environmental cleanup campaign to preserve and protect clean green landscapes. Together, we can clean up parks, beaches, or other public areas to create a better living environment for the community.'),
(2, 'http://tinhdoankiengiang.org.vn/userfiles/images/z3638814942254_8b9559afab5570469b62e82f494032b9.jpg', 'nguyenlamvolunteer@gmail.com', 'Teaching disadvantaged children', 3, '2023-05-01', '2024-04-24', '2025-01-01', 1, 'Quang Tri Province', 5, '2023-04-01', '2024-02-21', 0, 'Participate in teaching programs and share knowledge with disadvantaged children. Become a mentor and guide them on their path of learning and development.'),
(3, 'https://images2.thanhnien.vn/zoom/622_389/Uploaded/lethanh/2021_08_26/z2712654306512_d0c011963884cce6e6ccf9b2ba30aaed_NKKP.jpg', 'volunteeringteam@gmail.com', 'Distributing food to the homeless', 4, '2022-07-01', '2023-01-01', '2023-04-01', 1, 'Da Nang Province', 5, '2022-05-01', '2022-07-24', 0, 'Join food distribution activities to help the homeless. Every grain of rice, every loaf of bread can make a difference in their lives.'),
(4, 'https://ddk.1cdn.vn/thumbs/1200x630/2024/01/29/_neo0198.jpg', 'tinhnguyenvolunteer@gmail.com', 'Organizing fundraising events for orphaned children', 7, '2023-05-01', '2024-05-01', '2025-05-01', 1, 'Cao Bang Province', 5, '2023-04-01', '2024-04-24', 0, 'Participate in fundraising events to support orphaned children. Every donated dollar will help provide them with care, education, and opportunities for a brighter future.'),
(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQspgyc7BM40_5gVpBBZGsrZzzeZDE2M5XdXh2sSZhHw&s', 'volunteergroup@gmail.com', 'Building houses for the poor', 4, '2023-07-01', '2024-01-01', '2024-12-01', 1, 'Quang Ngai Province', 5, '2023-06-01', '2024-01-24', 0, 'Come together for a project to build houses for the poor living in difficult conditions. A new home will bring hope and warmth to their families.'),
(6, 'https://admin.ashico.com.vn/upload/ashico/images/3434343434343434(3).jpg', 'volunteeralliance@gmail.com', 'Organizing programs to assist the elderly', 1, '2024-06-10', '2024-07-01', '2024-07-10', 1, 'Quang Tri Province', 6, '2024-06-01', '2024-06-06', 1, 'Get involved in activities to support and care for the elderly in the community. Take the time to listen to their experiences and stories.'),
(7, 'https://benhvienbaria.com/sites/default/files/12_4.jpg', 'tinhnguyenorg@gmail.com', 'Hosting educational workshops for underprivileged students', 4, '2023-12-20', '2024-01-01', '2024-01-05', 1, 'Quang Binh Province', 6, '2023-12-10', '2024-12-15', 0, 'Organize workshops and support programs to provide educational opportunities for underprivileged students. Share knowledge and skills to help them achieve their goals.'),
(8, 'https://docudanang.com.vn/wp-content/uploads/2017/06/quyen-gop-tu-thien.jpg', 'volunteerassociation@gmail.com', 'Organizing reading programs for children', 3, '2024-05-01', '2024-06-01', '2024-10-07', 1, 'Quang Ninh Province', 6, '2024-04-01', '2024-04-01', 0, 'Join reading programs for children to ignite their passion for reading and explore their world. Every story is a gateway to new knowledge and ideas.'),
(9, 'https://hnm.1cdn.vn/2023/04/17/hanoimoi.com.vn-uploads-hongvan-2023-_sinh-vien.jpg', 'nguoitinhnguyen@gmail.com', 'Hosting free community health screenings', 1, '2024-07-25', '2024-08-01', '2024-08-10', 1, 'Ha Noi Province', 6, '2024-05-25', '2024-05-25', 0, 'Provide free health screening services to help the community become informed about health and disease prevention. A healthy community is the foundation for sustainable development.'),
(10, 'https://duonglaobinhmy.com/wp-content/uploads/2022/12/vui-choi-giai-tri.jpg', 'volunteercommunity@gmail.com', 'Organizing cultural events to raise funds for disabled children', 1, '2024-09-10', '2024-10-01', '2024-10-10', 1, 'Quang Tri Province', 6, '2024-07-10', '2024-07-10', 0, 'Participate in cultural events to raise funds and support for disabled children. Let\'s break down barriers and create a warm and inclusive environment for everyone.'),
(11, NULL, 'heelloo@gmail.com', 'hello cuoc doi', 1, '2024-09-06', '2024-10-06', '2024-10-09', 1, 'Hoi An Beach', 5, '2024-04-27', '2024-04-27', 0, '1234'),
(13, NULL, 'heelloo@gmail.com', 'hello anh em ban be co di chu bac ', 1, '2024-09-06', '2024-10-06', '2024-10-09', 1, 'Tam Ky Beach', 5, '2024-04-27', '2024-05-11', 0, '1234'),
(14, NULL, 'heelloo@gmail.com', 'hello anh em ban be co di chu bac hello nobita ', 1, '2024-09-06', '2024-10-06', '2024-10-09', 1, 'Tam Ky Beach', 5, '2024-04-27', '2024-04-27', 0, '1234'),
(15, NULL, 'heelloo@gmail.com', 'Quan acitrivy1', 1, '2024-09-06', '2024-10-06', '2024-10-09', 1, 'Tam Ky Beach', 5, '2024-05-10', '2024-05-10', 0, '1234'),
(16, 'https://docudanang.com.vn/wp-content/uploads/2017/06/quyen-gop-tu-thien.jpg', 'heelloo@gmail.com', 'Quan acitrivy1', 1, '2024-09-06', '2024-10-06', '2024-10-09', 1, 'Tam Ky Beach', 6, '2024-05-11', '2024-05-11', 0, '1234'),
(17, 'https://docudanang.com.vn/wp-content/uploads/2017/06/quyen-gop-tu-thien.jpg', 'qweqweqwe@gmail.com', 'qeqweqwe', 1, '2024-05-13', '2024-05-16', '2024-05-31', 2, 'qweqweqwe', 6, '2024-05-11', '2024-05-11', 0, 'qweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqwqweqweqweqweqwwqeewqweqw'),
(18, 'https://docudanang.com.vn/wp-content/uploads/2017/06/quyen-gop-tu-thien.jpg', 'qweqweqwe@gmail.com', 'qưeqweqweq1', 1, '2024-05-08', '2024-05-15', '2024-05-23', 1, 'eqweqe', 6, '2024-05-11', '2024-05-11', 0, 'qưeqwweqweqweqweqweqweqưeqwweqweqweqweqweqweqưeqwweqweqweqweqweqweqưeqwweqweqweqweqweqweqưeqwweqweqweqweqweqwe'),
(19, 'https://docudanang.com.vn/wp-content/uploads/2017/06/quyen-gop-tu-thien.jpg', 'activity1@gmail.com', 'test activity', 1, '2024-05-14', '2024-05-13', '2024-05-23', 1, 'Da Nang', 6, '2024-05-14', '2024-05-14', 1, '123');

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `date_earn_certificate` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `certificate_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `user_id`, `activity_id`, `certificate`, `date_earn_certificate`, `createdAt`, `certificate_name`) VALUES
(1, 1, 5, NULL, NULL, '2023-06-02', NULL),
(2, 2, 5, NULL, NULL, '2023-04-02', NULL),
(3, 3, 5, NULL, NULL, '2022-05-02', NULL),
(4, 4, 5, NULL, NULL, '2023-04-02', NULL),
(9, 2, 2, NULL, NULL, '2024-05-27', NULL),
(10, 2, 8, NULL, NULL, '2024-07-11', NULL),
(11, 2, 2, '', '2024-12-12', '2024-04-28', NULL),
(12, 2, 3, 'http://res.cloudinary.com/deei5izfg/image/upload/v1717435814/Mobile/vziilbt4jtsvoaliyzbu.jpg', NULL, '2024-04-28', 'Certificate of activtiy \'Distributing food to the homeless\''),
(14, 2, 7, '', '2025-01-01', '2024-04-28', NULL),
(16, 2, 4, NULL, '2025-01-01', '2024-04-28', NULL),
(22, 2, 1, '', NULL, '2024-05-16', NULL),
(23, 2, 1, '', NULL, '2024-05-16', NULL),
(24, 2, 1, '', NULL, '2024-05-16', NULL),
(25, 2, 1, '', NULL, '2024-05-16', NULL),
(26, 2, 1, '', NULL, '2024-05-16', NULL),
(29, 2, 1, '', NULL, '2024-05-16', NULL),
(30, 1, 8, '', NULL, '2024-05-16', NULL),
(31, 1, 8, '', NULL, '2024-05-16', NULL),
(33, 2, 8, '', NULL, '2024-05-25', NULL),
(35, 3, 8, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716633991/Mobile/ejtg9nwql2jlgskjoew4.jpg', '2024-05-25', '2024-05-25', 'Certificate of \"Organizing reading programs for children\" activity'),
(36, 1, 8, '', NULL, '2024-05-25', NULL),
(37, 1, 8, '', NULL, '2024-05-25', NULL),
(38, 1, 8, '', NULL, '2024-05-25', NULL),
(39, 1, 8, '', NULL, '2024-05-25', NULL),
(40, 3, 8, '', NULL, '2024-05-25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `receiver_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `sender_id`, `receiver_id`, `content`, `createdAt`) VALUES
(1, 6, 2, 'hi ban', '2024-05-27 08:52:44'),
(2, 2, 6, 'sao vay banj', '2024-05-27 08:52:56'),
(3, 6, 2, 'khong co gi hoi vui :))', '2024-05-27 08:53:06'),
(4, 2, 6, 'oke :)))', '2024-05-27 08:53:12'),
(5, 16, 6, 'hi', '2024-05-27 09:21:46'),
(6, 16, 6, 'I have accept your form', '2024-05-27 09:22:08'),
(7, 6, 16, 'really thank so much for that one', '2024-05-27 09:22:18'),
(8, 16, 6, 'aukii', '2024-05-27 09:22:25'),
(9, 2, 5, 'qưeqwe', '2024-06-04 00:17:22'),
(10, 2, 15, 'hello bạn', '2024-06-04 00:17:30'),
(11, 2, 5, 'hello bạn', '2024-06-04 00:17:38'),
(12, 2, 1, 'đi uống bia đi bạn', '2024-06-04 00:17:50'),
(13, 2, 4, 'hello bạn', '2024-06-04 00:18:00'),
(14, 2, 3, 'hello bạn', '2024-06-04 00:18:17'),
(15, 3, 2, 'sao vậy bạn', '2024-06-04 00:18:55'),
(16, 2, 3, 'à không có gì :))) ', '2024-06-04 00:19:03'),
(17, 3, 2, 'rảnh hỉ :)) đăng ký tham gia hoạt động bên mình đi', '2024-06-04 00:19:21');

-- --------------------------------------------------------

--
-- Table structure for table `deleteactivityforms`
--

CREATE TABLE `deleteactivityforms` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `isAccept` tinyint(4) DEFAULT NULL,
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `deleteactivityforms`
--

INSERT INTO `deleteactivityforms` (`id`, `activity_id`, `reason`, `isAccept`, `createdAt`) VALUES
(1, 19, 'VI li do nao do nen la toi muon xoa', 1, '2024-05-27'),
(2, 19, 'VI li do nao do nen la toi muon xoa', 2, '2024-05-27'),
(3, 8, 'This activity don\'t have any candidate to take part in so I want to delete it', 0, '2024-06-04');

-- --------------------------------------------------------

--
-- Table structure for table `likeposts`
--

CREATE TABLE `likeposts` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `likeposts`
--

INSERT INTO `likeposts` (`id`, `post_id`, `account_id`, `createdAt`) VALUES
(1, 1, 1, '2022-10-10'),
(2, 1, 1, '2022-10-10'),
(3, 1, 1, '2022-10-20'),
(4, 1, 4, '2024-01-01'),
(5, 2, 1, '2024-01-01'),
(6, 4, 2, '2020-01-01'),
(7, 8, 5, '2022-01-01'),
(8, 9, 2, '2022-01-01'),
(9, 10, 2, '2022-01-01'),
(23, 1, 6, '2024-05-14'),
(25, 4, 6, '2024-05-14'),
(32, 16, 6, '2024-05-14');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `type` int(11) NOT NULL,
  `idTO` int(11) NOT NULL,
  `image` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `title`, `status`, `account_id`, `content`, `createdAt`, `type`, `idTO`, `image`) VALUES
(1, 'New Comment on Your Post', '0', 6, 'Someone commented on your post. Check it out!', '2024-05-25', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(2, 'New Comment on Your Post', '0', 6, 'Someone commented on your post. Check it out!', '2024-05-25', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(3, 'Reply to Your Comment', '0', 3, 'Someone replied to your comment on the post. Check it out!', '2024-05-25', 2, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png'),
(4, 'New Comment on Your Post', '0', 6, 'Someone commented on your post. Check it out!', '2024-05-25', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(5, 'Reply to Your Comment', '0', 3, 'Someone replied to your comment on the post. Check it out!', '2024-05-25', 2, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png'),
(6, 'New Comment on Your Post', '0', 6, 'Someone commented on your post. Check it out!', '2024-05-25', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(7, 'Reply to Your Comment', '0', 3, 'Someone replied to your comment on the post. Check it out!', '2024-05-25', 2, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png'),
(8, 'New Comment on Your Post', '1', 6, 'Someone commented on your post. Check it out!', '2024-05-25', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(9, 'Reply to Your Comment', '0', 3, 'Someone replied to your comment on the post. Check it out!', '2024-05-25', 2, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png'),
(10, 'New Task Assigned', '1', 2, 'You have been assigned a new task. Please check your tasks list for details.', '2024-05-25', 3, 8, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544153/Mobile/lokf1wpzdlx7hhfyldiq.png'),
(11, 'Activity Registration Approved', '0', 3, 'Your registration for the activity has been approved. We look forward to your participation!', '2024-05-25', 4, 8, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544095/Mobile/u5k6w45hxt8jxkln62ko.png    '),
(12, 'Activity Registration Approved', '0', 3, 'Your registration for the activity has been approved. We look forward to your participation!', '2024-05-25', 4, 8, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544095/Mobile/u5k6w45hxt8jxkln62ko.png    '),
(13, 'Activity Registration Denied', '0', 3, 'We regret to inform you that your registration for the activity has been denied. Please contact support for more information.', '2024-05-25', 0, 0, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544095/Mobile/u5k6w45hxt8jxkln62ko.png    '),
(14, 'Certificate Awarded', '0', 3, 'Congratulations! You have been awarded a certificate for joining our activity.', '2024-05-25', 0, 0, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716633991/Mobile/ejtg9nwql2jlgskjoew4.jpg'),
(15, 'New Comment on Your Post', '0', 6, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(16, 'Reply to Your Comment', '1', 6, 'Someone replied to your comment on the post. Check it out!', '2024-05-27', 2, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png'),
(17, 'New Comment on Your Post', '0', 6, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(18, 'Reply to Your Comment', '0', 6, 'Someone replied to your comment on the post. Check it out!', '2024-05-27', 2, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png'),
(19, 'New Comment on Your Post', '1', 6, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(20, 'New Comment on Your Post', '1', 6, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(21, 'New Comment on Your Post', '1', 6, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 12, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(22, 'Post Deletion Request Denied', '0', 6, 'Your request to delete the post titled \'Sample Post\' has been denied. Please review our guidelines or contact support for more details.', '2024-05-27', 0, 0, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716543944/Mobile/wfbktxyl8lfdkurcfhkd.png'),
(23, 'Post Deletion Approved', '1', 6, 'Your request to delete the post titled has been approved.', '2024-05-27', 0, 0, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716543944/Mobile/wfbktxyl8lfdkurcfhkd.png'),
(24, 'Post Deletion Request Denied', '1', 6, 'Your request to delete the post titled \'Sample Post\' has been denied. Please review our guidelines or contact support for more details.', '2024-05-27', 0, 0, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716543944/Mobile/wfbktxyl8lfdkurcfhkd.png'),
(25, 'New Comment on Your Post', '0', 5, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 18, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(26, 'New Comment on Your Post', '0', 5, 'Someone commented on your post. Check it out!', '2024-05-27', 1, 18, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png'),
(27, 'New Task Assigned', '0', 2, 'You have been assigned a new task. Please check your tasks list for details.', '2024-06-04', 3, 8, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544153/Mobile/lokf1wpzdlx7hhfyldiq.png'),
(28, 'New Task Assigned', '0', 2, 'You have been assigned a new task. Please check your tasks list for details.', '2024-06-04', 3, 8, 'http://res.cloudinary.com/deei5izfg/image/upload/v1716544153/Mobile/lokf1wpzdlx7hhfyldiq.png'),
(29, 'Certificate Awarded', '0', 2, 'Congratulations! You have been awarded a certificate for joining our activity.', '2024-06-04', 0, 0, 'http://res.cloudinary.com/deei5izfg/image/upload/v1717435814/Mobile/vziilbt4jtsvoaliyzbu.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `postcomments`
--

CREATE TABLE `postcomments` (
  `id` int(11) NOT NULL,
  `comment_parent_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `postcomments`
--

INSERT INTO `postcomments` (`id`, `comment_parent_id`, `post_id`, `content`, `account_id`, `createdAt`, `updatedAt`, `isDeleted`) VALUES
(1, NULL, 12, 'sdadsff', 2, NULL, NULL, 1),
(8, NULL, 13, 'nguoi do la lua chon em muon oke ha em oi doraemon', 2, '2024-05-04', '2024-05-04', 0),
(9, NULL, 13, 'nguoi do la lua chon em muon oke ha em oi doraemon chaien', 2, '2024-05-04', '2024-05-04', 1),
(10, NULL, 13, 'dom dom mai yeu jack97', 2, '2024-05-04', '2024-05-04', 0),
(12, 10, 13, 'dom dom mai yeu', 2, '2024-05-21', '2024-05-21', 0),
(13, NULL, 13, 'dom dom mai yeu', 2, '2024-05-25', NULL, 0),
(14, NULL, 13, 'dom dom mai yeu BAO DI', 2, '2024-05-25', NULL, 0),
(15, NULL, 12, 'hello admin', 3, '2024-05-25', NULL, 0),
(16, NULL, 12, 'hello admin', 3, '2024-05-25', NULL, 0),
(17, 16, 12, 'chao ban', 6, '2024-05-25', NULL, 0),
(18, 16, 12, 'hello banj', 1, '2024-05-25', NULL, 0),
(19, 16, 12, '??', 1, '2024-05-25', NULL, 0),
(20, 16, 12, '23', 1, '2024-05-25', NULL, 0),
(21, 17, 12, 'ổn nhỉ', 2, '2024-05-27', NULL, 0),
(22, 17, 12, 'ổn nhỉ', 2, '2024-05-27', NULL, 0),
(23, 22, 12, 'chắc vậy', 2, '2024-05-27', NULL, 0),
(24, 22, 12, 'chắc vậy', 2, '2024-05-27', NULL, 0),
(25, 22, 12, 'chắc vậy', 2, '2024-05-27', NULL, 0),
(26, NULL, 18, 'hi admin', 2, '2024-05-27', NULL, 0),
(27, 26, 18, 'hi ban', 2, '2024-05-27', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `content` mediumtext DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `activity_id`, `title`, `image`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 5, 'Empowering Our Seniors: Organizing Programs to Support the Elderly Community', 'https://www.ssi.gov.sg/images/eldercare-banner.png', '<h2>Organizing Programs to Support the Elderly Community</h2>\n<p>At Green Earth Initiative, we believe in the importance of supporting our elderly community members. That\'s why we\'re launching programs aimed at providing assistance and care for the elderly, and we need your help!</p>\n<h3>About the Programs:</h3>\n<p>Our programs are designed to address the various needs of the elderly in our community. From companionship and social activities to access to healthcare and essential services, we aim to improve the quality of life for our elderly population.</p>\n<h3>How You Can Get Involved:</h3>\n<p>There are many ways you can participate in our programs:</p>\n<ul>\n  <li>Volunteer to spend time with elderly individuals, offering companionship and support</li>\n  <li>Assist with organizing and facilitating social activities and events for the elderly</li>\n  <li>Provide transportation services to help elderly individuals access healthcare appointments and run errands</li>\n  <li>Help coordinate outreach efforts to raise awareness about the needs of the elderly in our community</li>\n</ul>\n<p>By getting involved, you\'ll have the opportunity to make a meaningful difference in the lives of our elderly neighbors.</p>\n<h3>Why It Matters:</h3>\n<p>Supporting the elderly is crucial for ensuring their well-being, dignity, and inclusion in our community. By organizing programs to support them, we can enhance their quality of life and show our appreciation for their contributions to society.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to support the elderly community today and be part of creating a more caring and inclusive society!</p>\n<p>Together, we can make a positive impact in the lives of our elderly neighbors.</p>\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com/?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2024-06-02', '2024-06-02'),
(2, 5, 'Empowering Underprivileged Students: Hosting Educational Workshops for Brighter Futures', 'https://www.rythmfoundation.org/wp-content/uploads/2021/01/IMG_20190826_125706-770x400-1.jpg', '<h2>Empowering Underprivileged Students: Hosting Educational Workshops for Brighter Futures</h2>\n<p>At Green Earth Initiative, we believe in the importance of supporting our elderly community members. That\'s why we\'re launching programs aimed at providing assistance and care for the elderly, and we need your help!</p>\n<h3>About the Programs:</h3>\n<p>Our programs are designed to address the various needs of the elderly in our community. From companionship and social activities to access to healthcare and essential services, we aim to improve the quality of life for our elderly population.</p>\n<h3>How You Can Get Involved:</h3>\n<p>There are many ways you can participate in our programs:</p>\n<ul>\n  <li>Volunteer to spend time with elderly individuals, offering companionship and support</li>\n  <li>Assist with organizing and facilitating social activities and events for the elderly</li>\n  <li>Provide transportation services to help elderly individuals access healthcare appointments and run errands</li>\n  <li>Help coordinate outreach efforts to raise awareness about the needs of the elderly in our community</li>\n</ul>\n<p>By getting involved, you\'ll have the opportunity to make a meaningful difference in the lives of our elderly neighbors.</p>\n<h3>Why It Matters:</h3>\n<p>Supporting the elderly is crucial for ensuring their well-being, dignity, and inclusion in our community. By organizing programs to support them, we can enhance their quality of life and show our appreciation for their contributions to society.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to support the elderly community today and be part of creating a more caring and inclusive society!</p>\n<p>Together, we can make a positive impact in the lives of our elderly neighbors.</p>\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com/?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2023-12-11', '2024-12-11'),
(3, 5, 'Expanding Horizons: Organizing Reading Programs for Children', 'https://bookscouter.com/blog/wp-content/uploads/2023/05/book_charity_1.png', '<h2>Expanding Horizons: Organizing Reading Programs for Children</h2>\n<p>At Green Earth Initiative, we believe in the importance of nurturing young minds through reading. That\'s why we\'re excited to announce our new initiative aimed at organizing reading programs for children, and we need your support!</p>\n<h3>About the Programs:</h3>\n<p>Our reading programs are designed to spark children\'s interest in reading and expand their horizons through books. From storytelling sessions to book clubs, we offer a variety of activities to engage children of all ages and interests.</p>\n<h3>How You Can Get Involved:</h3>\n<p>There are many ways you can support our reading programs:</p>\n<ul>\n  <li>Volunteer to read aloud to children during storytelling sessions</li>\n  <li>Donate books or funds to help expand our library and resources</li>\n  <li>Assist with organizing and promoting reading events and activities</li>\n  <li>Spread the word about the importance of reading and literacy</li>\n</ul>\n<p>By getting involved, you\'ll be helping to foster a love of reading in children and opening doors to new opportunities.</p>\n<h3>Why It Matters:</h3>\n<p>Reading is essential for children\'s academic success, imagination, and cognitive development. By organizing reading programs, we can empower children to become lifelong learners and confident individuals.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to organize reading programs for children and help us expand their horizons!</p>\n<p>Together, we can inspire a new generation of readers and learners.</p>\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com/?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2024-04-01', '2024-04-01'),
(4, 5, 'Promoting Wellness: Hosting Free Community Health Screenings', 'https://www.wcrc.org/wp-content/uploads/2023/10/Community-Health-Fair-2023-flyer.jpg', '<h2>Promoting Wellness: Hosting Free Community Health Screenings</h2>\n<p>At Green Earth Initiative, we are committed to promoting wellness and ensuring access to healthcare for all members of our community. That\'s why we are excited to announce our upcoming event: Free Community Health Screenings!</p>\n<h3>About the Event:</h3>\n<p>Our Free Community Health Screenings event aims to provide essential health services to individuals in need. From blood pressure checks to cholesterol screenings, we offer a range of tests to help community members understand and manage their health.</p>\n<h3>How You Can Participate:</h3>\n<p>There are several ways you can get involved in our event:</p>\n<ul>\n  <li>Volunteer to assist with organizing and conducting health screenings</li>\n  <li>Spread the word about the event to friends, family, and community members</li>\n  <li>Donate supplies or resources to support the event</li>\n  <li>Attend the event and take advantage of the free health screenings</li>\n</ul>\n<p>By participating in our Free Community Health Screenings event, you can take proactive steps towards improving your health and well-being.</p>\n<h3>Why It Matters:</h3>\n<p>Regular health screenings are essential for early detection and prevention of health issues. By offering free screenings to our community, we can help individuals identify potential health concerns early on and take appropriate actions to address them.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to prioritize your health? Join us at our Free Community Health Screenings event and take the first step towards a healthier future!</p>\n<p>Together, we can promote wellness and build a healthier community for all.</p>\n<p>Shortlink: <a href=\"https://greenearthinitiative.com/?p=12345\">https://greenearthinitiative.com?p=12345</a></p>', '2024-06-10', '2024-06-10'),
(5, 10, 'Empowering Disabled Children: Organizing Cultural Events to Raise Funds', 'https://image.volunteerworld.com/f2a7703c4db15bee0bb3a2b5b0e893abbbb14ba9/caring-for-disabled-children.jpg', '<h2>Empowering Disabled Children: Organizing Cultural Events to Raise Funds</h2>\n<p>Our organization is dedicated to empowering disabled children by organizing cultural events aimed at raising funds to support their needs. We believe that every child, regardless of their abilities, deserves a chance to thrive and reach their full potential.</p>\n<h3>About the Events:</h3>\n<p>Our cultural events are designed to celebrate diversity and inclusion while also serving as fundraising opportunities. From art exhibitions to music concerts and theatrical performances, these events showcase the talents of disabled children and raise awareness about their challenges.</p>\n<h3>How You Can Support:</h3>\n<p>There are several ways you can support our cause:</p>\n<ul>\n  <li>Attend our cultural events and spread the word to your friends and family</li>\n  <li>Make a donation to help fund programs and services for disabled children</li>\n  <li>Volunteer your time and skills to assist with event planning and coordination</li>\n  <li>Become a sponsor or partner to contribute resources and support</li>\n</ul>\n<p>Your support will make a meaningful difference in the lives of disabled children and help us create a more inclusive society.</p>\n<h3>Why It Matters:</h3>\n<p>Empowering disabled children not only improves their quality of life but also enriches our communities. By providing them with opportunities to showcase their talents and participate in cultural events, we promote acceptance, understanding, and equality for all.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to empower disabled children and create a more inclusive world for everyone!</p>\n<p>Shortlink: <a href=\"#\">Link</a></p>', '2024-07-11', '2024-07-11'),
(6, 1, 'Together for Change: Environmental Cleanup Initiative', 'https://tamduong.laichau.gov.vn/uploads/news/2020_07/img_5436.jpg', '<h2>Join Our Environmental Cleanup Campaign!</h2>\n\n<p>At Green Earth Initiative, we believe in the power of collective action to create positive change. That \'s why we \'re launching our annual Environmental Cleanup Campaign, and we need your help!</p>\n\n<h3>About the Campaign:</h3>\n\n<p>Our Environmental Cleanup Campaign aims to address the growing issue of pollution in our communities. From litter on our streets to plastics in our oceans, environmental degradation affects us all. By coming together to clean up our surroundings, we can make a real difference for the planet and future generations.</p>\n\n<h3>How You Can Get Involved:</h3>\n\n<p>There are many ways you can participate in our campaign:</p>\n\n<ul>\n  <li>Join a cleanup event in your local area</li>\n  <li>Organize a cleanup team with friends, family, or coworkers</li>\n  <li>Volunteer to lead a cleanup effort in your community</li>\n  <li>Spread the word on social media and encourage others to join</li>\n</ul>\n\n<p>No matter how you choose to participate, your efforts will contribute to a cleaner, healthier environment for all.</p>\n\n<h3>Why It Matters:</h3>\n\n<p>Protecting the environment is essential for our health, well-being, and the survival of countless species. By taking action to clean up our surroundings, we can reduce pollution, preserve natural habitats, and create a more sustainable future for everyone.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Ready to make a difference? Join our Environmental Cleanup Campaign today and be part of the solution!</p>\n\n<p>Together, we can build a cleaner, greener future for all.</p>\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2023-06-03', '2023-06-03'),
(7, 5, 'Bright Futures: Education Program for Underprivileged Children', 'https://cand.com.vn/Files/Image/2015/03/10/vungcao10.3.15-1.jpg', '<h2>Empowerment Through Education: Teaching Children in Need</h2>\n\n<p>At Brighter Futures Foundation, we are committed to providing education to children facing difficult circumstances. Our mission is to empower these children with knowledge and skills that will enable them to overcome obstacles and build a brighter future for themselves.</p>\n\n<h3>About Our Program:</h3>\n\n<p>Our teaching program focuses on reaching out to children who may not have access to quality education due to poverty, conflict, or other challenges. We believe that every child deserves the opportunity to learn and grow, regardless of their circumstances.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our program:</p>\n\n<ul>\n  <li>Volunteer as a teacher or tutor</li>\n  <li>Donate educational materials, such as books, pencils, and notebooks</li>\n  <li>Provide financial support to fund school supplies and classroom resources</li>\n  <li>Spread awareness about the importance of education for children in need</li>\n</ul>\n\n<p>Your contribution, no matter how small, can make a big difference in the lives of these children.</p>\n\n<h3>Why Education Matters:</h3>\n\n<p>Education is the key to breaking the cycle of poverty and empowering individuals to reach their full potential. By providing children with access to education, we are giving them the tools they need to succeed in life and become active members of their communities.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Are you passionate about making a difference in the lives of children? Join us today in our mission to provide education to those who need it most.</p>\n\n<p>To learn more about how you can get involved, visit our website or contact us directly.</p>\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2023-04-01', '2023-04-01'),
(8, 5, 'Sharing Love: Food Distribution for the Homeless', 'https://media.npr.org/assets/img/2014/10/22/homelessfood_wide-933c67b9420c54f467eac1229d7a7c027e2b565c-s1100-c50.jpg', '<h2>Feeding the Homeless: Providing Food for Those in Need</h2>\n\n<p>At Food for All Foundation, we are dedicated to addressing hunger and food insecurity among the homeless population. Our goal is to ensure that no one goes to bed hungry and that everyone has access to nutritious meals, regardless of their circumstances.</p>\n\n<h3>About Our Program:</h3>\n\n<p>Our food distribution program focuses on reaching out to homeless individuals and families who may not have regular access to meals. We collaborate with local shelters, soup kitchens, and community centers to provide hot meals and food packages to those in need.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our program:</p>\n\n<ul>\n  <li>Volunteer at our food distribution events</li>\n  <li>Donate food items, such as canned goods, rice, pasta, and non-perishable items</li>\n  <li>Contribute financially to help purchase food supplies and cover operational costs</li>\n  <li>Spread awareness about hunger and homelessness in your community</li>\n</ul>\n\n<p>Your generosity and support can make a significant impact in the lives of those struggling with hunger and homelessness.</p>\n\n<h3>Why Food Assistance Matters:</h3>\n\n<p>Access to nutritious food is essential for overall health and well-being. By providing food assistance to the homeless, we not only alleviate hunger but also promote dignity and support individuals on their journey toward stability and self-sufficiency.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Do you believe that everyone deserves access to food? Join us today in our mission to feed the homeless and support those in need.</p>\n\n<p>To learn more about how you can get involved or to make a donation, visit our website or contact us directly.</p>\n\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>\n', '2022-06-01', '2022-06-01'),
(9, 5, 'New Smiles: Fundraising Event for Orphaned Children', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnOBox837GZrWKjUlwdQqZfvU3kaQ5mnOdKHrwRkQQQ&s', '<h2>Empowering Orphans: Fundraising Event for Orphaned Children</h2>\n\n<p>At Hopeful Hearts Foundation, we are committed to making a difference in the lives of orphaned children. Our upcoming fundraising event aims to provide financial support and resources to orphanages and orphaned children in need.</p>\n\n<h3>About Our Event:</h3>\n\n<p>Our fundraising event will bring together members of the community, businesses, and organizations to raise funds for orphaned children. Through various activities such as auctions, raffles, and performances, we hope to generate both financial support and awareness for the cause.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our fundraising event:</p>\n\n<ul>\n  <li>Attend the event and participate in fundraising activities</li>\n  <li>Donate items for auction or raffle prizes</li>\n  <li>Make a financial contribution to support orphaned children</li>\n  <li>Spread the word and invite others to attend the event</li>\n</ul>\n\n<p>Your support will make a meaningful difference in the lives of orphaned children, providing them with the resources they need to thrive.</p>\n\n<h3>Why Support Orphaned Children:</h3>\n\n<p>Orphaned children face unique challenges and deserve the same opportunities as other children. By supporting orphanages and orphaned children, we can provide them with access to education, healthcare, and a loving environment where they can grow and thrive.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Are you ready to make a difference in the lives of orphaned children? Join us today in our mission to provide hope and support to those in need.</p>\n\n<p>To learn more about our fundraising event or to make a donation, visit our website or contact us directly.</p>\n\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>\n', '2023-04-01', '2023-04-01'),
(10, 5, 'A New Home: Building Houses for the Needy', 'https://www.marathon-istanbul.com/wp-content/uploads/2021/09/MRL-Projects.jpg', '<h2>Building Homes for the Poor: Providing Shelter for Those in Need</h2>\n\n<p>At Sheltering Hands Organization, we believe that everyone deserves a safe and secure place to call home. That\'s why we\'re dedicated to building homes for families living in poverty, providing them with the shelter and stability they need to thrive.</p>\n\n<h3>About Our Project:</h3>\n\n<p>Our housing project aims to construct affordable homes for families in need. We work closely with local communities to identify families living in inadequate housing conditions and provide them with safe and sustainable homes.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our housing project:</p>\n\n<ul>\n  <li>Volunteer to help with construction efforts</li>\n  <li>Donate funds or building materials for home construction</li>\n  <li>Spread awareness about the importance of affordable housing</li>\n  <li>Support policies and initiatives that address housing inequality</li>\n</ul>\n\n<p>Your contribution, no matter how small, can make a big difference in the lives of families in need of housing.</p>\n\n<h3>Why Housing Matters:</h3>\n\n<p>Access to safe and stable housing is essential for the well-being of individuals and families. By providing affordable homes, we can help break the cycle of poverty and provide families with the foundation they need to build better lives.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Are you passionate about making a difference in the lives of those in need of housing? Join us today in our mission to provide shelter and support to families living in poverty.</p>\n\n<p>To learn more about how you can get involved or to make a donation, visit our website or contact us directly.</p>\n\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>\n', '2023-06-01', '2023-06-01'),
(11, 6, 'Empowering Our Seniors: Organizing Programs to Support the Elderly Community', 'https://www.ssi.gov.sg/images/eldercare-banner.png', '<h2>Organizing Programs to Support the Elderly Community</h2>\n<p>At Green Earth Initiative, we believe in the importance of supporting our elderly community members. That\'s why we\'re launching programs aimed at providing assistance and care for the elderly, and we need your help!</p>\n<h3>About the Programs:</h3>\n<p>Our programs are designed to address the various needs of the elderly in our community. From companionship and social activities to access to healthcare and essential services, we aim to improve the quality of life for our elderly population.</p>\n<h3>How You Can Get Involved:</h3>\n<p>There are many ways you can participate in our programs:</p>\n<ul>\n  <li>Volunteer to spend time with elderly individuals, offering companionship and support</li>\n  <li>Assist with organizing and facilitating social activities and events for the elderly</li>\n  <li>Provide transportation services to help elderly individuals access healthcare appointments and run errands</li>\n  <li>Help coordinate outreach efforts to raise awareness about the needs of the elderly in our community</li>\n</ul>\n<p>By getting involved, you\'ll have the opportunity to make a meaningful difference in the lives of our elderly neighbors.</p>\n<h3>Why It Matters:</h3>\n<p>Supporting the elderly is crucial for ensuring their well-being, dignity, and inclusion in our community. By organizing programs to support them, we can enhance their quality of life and show our appreciation for their contributions to society.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to support the elderly community today and be part of creating a more caring and inclusive society!</p>\n<p>Together, we can make a positive impact in the lives of our elderly neighbors.</p>\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com/?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2024-06-08', '2024-06-08'),
(12, 7, 'Empowering Underprivileged Students: Hosting Educational Workshops for Brighter Futures', 'https://www.rythmfoundation.org/wp-content/uploads/2021/01/IMG_20190826_125706-770x400-1.jpg', '<h2>Empowering Underprivileged Students: Hosting Educational Workshops for Brighter Futures</h2>\n<p>At Green Earth Initiative, we believe in the importance of supporting our elderly community members. That\'s why we\'re launching programs aimed at providing assistance and care for the elderly, and we need your help!</p>\n<h3>About the Programs:</h3>\n<p>Our programs are designed to address the various needs of the elderly in our community. From companionship and social activities to access to healthcare and essential services, we aim to improve the quality of life for our elderly population.</p>\n<h3>How You Can Get Involved:</h3>\n<p>There are many ways you can participate in our programs:</p>\n<ul>\n  <li>Volunteer to spend time with elderly individuals, offering companionship and support</li>\n  <li>Assist with organizing and facilitating social activities and events for the elderly</li>\n  <li>Provide transportation services to help elderly individuals access healthcare appointments and run errands</li>\n  <li>Help coordinate outreach efforts to raise awareness about the needs of the elderly in our community</li>\n</ul>\n<p>By getting involved, you\'ll have the opportunity to make a meaningful difference in the lives of our elderly neighbors.</p>\n<h3>Why It Matters:</h3>\n<p>Supporting the elderly is crucial for ensuring their well-being, dignity, and inclusion in our community. By organizing programs to support them, we can enhance their quality of life and show our appreciation for their contributions to society.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to support the elderly community today and be part of creating a more caring and inclusive society!</p>\n<p>Together, we can make a positive impact in the lives of our elderly neighbors.</p>\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com/?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2023-12-15', '2024-12-15'),
(13, 8, 'Expanding Horizons: Organizing Reading Programs for Children', 'https://bookscouter.com/blog/wp-content/uploads/2023/05/book_charity_1.png', '<h2>Expanding Horizons: Organizing Reading Programs for Children</h2>\n<p>At Green Earth Initiative, we believe in the importance of nurturing young minds through reading. That\'s why we\'re excited to announce our new initiative aimed at organizing reading programs for children, and we need your support!</p>\n<h3>About the Programs:</h3>\n<p>Our reading programs are designed to spark children\'s interest in reading and expand their horizons through books. From storytelling sessions to book clubs, we offer a variety of activities to engage children of all ages and interests.</p>\n<h3>How You Can Get Involved:</h3>\n<p>There are many ways you can support our reading programs:</p>\n<ul>\n  <li>Volunteer to read aloud to children during storytelling sessions</li>\n  <li>Donate books or funds to help expand our library and resources</li>\n  <li>Assist with organizing and promoting reading events and activities</li>\n  <li>Spread the word about the importance of reading and literacy</li>\n</ul>\n<p>By getting involved, you\'ll be helping to foster a love of reading in children and opening doors to new opportunities.</p>\n<h3>Why It Matters:</h3>\n<p>Reading is essential for children\'s academic success, imagination, and cognitive development. By organizing reading programs, we can empower children to become lifelong learners and confident individuals.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to organize reading programs for children and help us expand their horizons!</p>\n<p>Together, we can inspire a new generation of readers and learners.</p>\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com/?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2024-04-15', '2024-04-20'),
(14, 9, 'Promoting Wellness: Hosting Free Community Health Screenings', 'https://www.wcrc.org/wp-content/uploads/2023/10/Community-Health-Fair-2023-flyer.jpg', '<h2>Promoting Wellness: Hosting Free Community Health Screenings</h2>\n<p>At Green Earth Initiative, we are committed to promoting wellness and ensuring access to healthcare for all members of our community. That\'s why we are excited to announce our upcoming event: Free Community Health Screenings!</p>\n<h3>About the Event:</h3>\n<p>Our Free Community Health Screenings event aims to provide essential health services to individuals in need. From blood pressure checks to cholesterol screenings, we offer a range of tests to help community members understand and manage their health.</p>\n<h3>How You Can Participate:</h3>\n<p>There are several ways you can get involved in our event:</p>\n<ul>\n  <li>Volunteer to assist with organizing and conducting health screenings</li>\n  <li>Spread the word about the event to friends, family, and community members</li>\n  <li>Donate supplies or resources to support the event</li>\n  <li>Attend the event and take advantage of the free health screenings</li>\n</ul>\n<p>By participating in our Free Community Health Screenings event, you can take proactive steps towards improving your health and well-being.</p>\n<h3>Why It Matters:</h3>\n<p>Regular health screenings are essential for early detection and prevention of health issues. By offering free screenings to our community, we can help individuals identify potential health concerns early on and take appropriate actions to address them.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to prioritize your health? Join us at our Free Community Health Screenings event and take the first step towards a healthier future!</p>\n<p>Together, we can promote wellness and build a healthier community for all.</p>\n<p>Shortlink: <a href=\"https://greenearthinitiative.com/?p=12345\">https://greenearthinitiative.com?p=12345</a></p>', '2024-07-15', '2024-07-15'),
(15, 10, 'Empowering Disabled Children: Organizing Cultural Events to Raise Funds', 'https://image.volunteerworld.com/f2a7703c4db15bee0bb3a2b5b0e893abbbb14ba9/caring-for-disabled-children.jpg', '<h2>Empowering Disabled Children: Organizing Cultural Events to Raise Funds</h2>\n<p>Our organization is dedicated to empowering disabled children by organizing cultural events aimed at raising funds to support their needs. We believe that every child, regardless of their abilities, deserves a chance to thrive and reach their full potential.</p>\n<h3>About the Events:</h3>\n<p>Our cultural events are designed to celebrate diversity and inclusion while also serving as fundraising opportunities. From art exhibitions to music concerts and theatrical performances, these events showcase the talents of disabled children and raise awareness about their challenges.</p>\n<h3>How You Can Support:</h3>\n<p>There are several ways you can support our cause:</p>\n<ul>\n  <li>Attend our cultural events and spread the word to your friends and family</li>\n  <li>Make a donation to help fund programs and services for disabled children</li>\n  <li>Volunteer your time and skills to assist with event planning and coordination</li>\n  <li>Become a sponsor or partner to contribute resources and support</li>\n</ul>\n<p>Your support will make a meaningful difference in the lives of disabled children and help us create a more inclusive society.</p>\n<h3>Why It Matters:</h3>\n<p>Empowering disabled children not only improves their quality of life but also enriches our communities. By providing them with opportunities to showcase their talents and participate in cultural events, we promote acceptance, understanding, and equality for all.</p>\n<h3>Join Us Today:</h3>\n<p>Ready to make a difference? Join our efforts to empower disabled children and create a more inclusive world for everyone!</p>\n<p>Shortlink: <a href=\"#\">Link</a></p>', '2024-08-11', '2024-08-11'),
(16, 1, 'Together for Change: Environmental Cleanup Initiative', 'https://tamduong.laichau.gov.vn/uploads/news/2020_07/img_5436.jpg', '<h2>Join Our Environmental Cleanup Campaign!</h2>\n\n<p>At Green Earth Initiative, we believe in the power of collective action to create positive change. That \'s why we \'re launching our annual Environmental Cleanup Campaign, and we need your help!</p>\n\n<h3>About the Campaign:</h3>\n\n<p>Our Environmental Cleanup Campaign aims to address the growing issue of pollution in our communities. From litter on our streets to plastics in our oceans, environmental degradation affects us all. By coming together to clean up our surroundings, we can make a real difference for the planet and future generations.</p>\n\n<h3>How You Can Get Involved:</h3>\n\n<p>There are many ways you can participate in our campaign:</p>\n\n<ul>\n  <li>Join a cleanup event in your local area</li>\n  <li>Organize a cleanup team with friends, family, or coworkers</li>\n  <li>Volunteer to lead a cleanup effort in your community</li>\n  <li>Spread the word on social media and encourage others to join</li>\n</ul>\n\n<p>No matter how you choose to participate, your efforts will contribute to a cleaner, healthier environment for all.</p>\n\n<h3>Why It Matters:</h3>\n\n<p>Protecting the environment is essential for our health, well-being, and the survival of countless species. By taking action to clean up our surroundings, we can reduce pollution, preserve natural habitats, and create a more sustainable future for everyone.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Ready to make a difference? Join our Environmental Cleanup Campaign today and be part of the solution!</p>\n\n<p>Together, we can build a cleaner, greener future for all.</p>\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2023-06-20', '2023-06-20'),
(17, 2, 'Bright Futures: Education Program for Underprivileged Children', 'https://cand.com.vn/Files/Image/2015/03/10/vungcao10.3.15-1.jpg', '<h2>Empowerment Through Education: Teaching Children in Need</h2>\n\n<p>At Brighter Futures Foundation, we are committed to providing education to children facing difficult circumstances. Our mission is to empower these children with knowledge and skills that will enable them to overcome obstacles and build a brighter future for themselves.</p>\n\n<h3>About Our Program:</h3>\n\n<p>Our teaching program focuses on reaching out to children who may not have access to quality education due to poverty, conflict, or other challenges. We believe that every child deserves the opportunity to learn and grow, regardless of their circumstances.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our program:</p>\n\n<ul>\n  <li>Volunteer as a teacher or tutor</li>\n  <li>Donate educational materials, such as books, pencils, and notebooks</li>\n  <li>Provide financial support to fund school supplies and classroom resources</li>\n  <li>Spread awareness about the importance of education for children in need</li>\n</ul>\n\n<p>Your contribution, no matter how small, can make a big difference in the lives of these children.</p>\n\n<h3>Why Education Matters:</h3>\n\n<p>Education is the key to breaking the cycle of poverty and empowering individuals to reach their full potential. By providing children with access to education, we are giving them the tools they need to succeed in life and become active members of their communities.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Are you passionate about making a difference in the lives of children? Join us today in our mission to provide education to those who need it most.</p>\n\n<p>To learn more about how you can get involved, visit our website or contact us directly.</p>\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>', '2023-04-15', '2023-04-15'),
(18, 3, 'Sharing Love: Food Distribution for the Homeless', 'https://media.npr.org/assets/img/2014/10/22/homelessfood_wide-933c67b9420c54f467eac1229d7a7c027e2b565c-s1100-c50.jpg', '<h2>Feeding the Homeless: Providing Food for Those in Need</h2>\n\n<p>At Food for All Foundation, we are dedicated to addressing hunger and food insecurity among the homeless population. Our goal is to ensure that no one goes to bed hungry and that everyone has access to nutritious meals, regardless of their circumstances.</p>\n\n<h3>About Our Program:</h3>\n\n<p>Our food distribution program focuses on reaching out to homeless individuals and families who may not have regular access to meals. We collaborate with local shelters, soup kitchens, and community centers to provide hot meals and food packages to those in need.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our program:</p>\n\n<ul>\n  <li>Volunteer at our food distribution events</li>\n  <li>Donate food items, such as canned goods, rice, pasta, and non-perishable items</li>\n  <li>Contribute financially to help purchase food supplies and cover operational costs</li>\n  <li>Spread awareness about hunger and homelessness in your community</li>\n</ul>\n\n<p>Your generosity and support can make a significant impact in the lives of those struggling with hunger and homelessness.</p>\n\n<h3>Why Food Assistance Matters:</h3>\n\n<p>Access to nutritious food is essential for overall health and well-being. By providing food assistance to the homeless, we not only alleviate hunger but also promote dignity and support individuals on their journey toward stability and self-sufficiency.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Do you believe that everyone deserves access to food? Join us today in our mission to feed the homeless and support those in need.</p>\n\n<p>To learn more about how you can get involved or to make a donation, visit our website or contact us directly.</p>\n\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>\n', '2022-06-15', '2022-06-15'),
(19, 4, 'New Smiles: Fundraising Event for Orphaned Children', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnOBox837GZrWKjUlwdQqZfvU3kaQ5mnOdKHrwRkQQQ&s', '<h2>Empowering Orphans: Fundraising Event for Orphaned Children</h2>\n\n<p>At Hopeful Hearts Foundation, we are committed to making a difference in the lives of orphaned children. Our upcoming fundraising event aims to provide financial support and resources to orphanages and orphaned children in need.</p>\n\n<h3>About Our Event:</h3>\n\n<p>Our fundraising event will bring together members of the community, businesses, and organizations to raise funds for orphaned children. Through various activities such as auctions, raffles, and performances, we hope to generate both financial support and awareness for the cause.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our fundraising event:</p>\n\n<ul>\n  <li>Attend the event and participate in fundraising activities</li>\n  <li>Donate items for auction or raffle prizes</li>\n  <li>Make a financial contribution to support orphaned children</li>\n  <li>Spread the word and invite others to attend the event</li>\n</ul>\n\n<p>Your support will make a meaningful difference in the lives of orphaned children, providing them with the resources they need to thrive.</p>\n\n<h3>Why Support Orphaned Children:</h3>\n\n<p>Orphaned children face unique challenges and deserve the same opportunities as other children. By supporting orphanages and orphaned children, we can provide them with access to education, healthcare, and a loving environment where they can grow and thrive.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Are you ready to make a difference in the lives of orphaned children? Join us today in our mission to provide hope and support to those in need.</p>\n\n<p>To learn more about our fundraising event or to make a donation, visit our website or contact us directly.</p>\n\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>\n', '2023-04-15', '2023-04-15'),
(20, 5, 'A New Home: Building Houses for the Needy', 'https://www.marathon-istanbul.com/wp-content/uploads/2021/09/MRL-Projects.jpg', '<h2>Building Homes for the Poor: Providing Shelter for Those in Need</h2>\n\n<p>At Sheltering Hands Organization, we believe that everyone deserves a safe and secure place to call home. That\'s why we\'re dedicated to building homes for families living in poverty, providing them with the shelter and stability they need to thrive.</p>\n\n<h3>About Our Project:</h3>\n\n<p>Our housing project aims to construct affordable homes for families in need. We work closely with local communities to identify families living in inadequate housing conditions and provide them with safe and sustainable homes.</p>\n\n<h3>How You Can Help:</h3>\n\n<p>There are many ways you can support our housing project:</p>\n\n<ul>\n  <li>Volunteer to help with construction efforts</li>\n  <li>Donate funds or building materials for home construction</li>\n  <li>Spread awareness about the importance of affordable housing</li>\n  <li>Support policies and initiatives that address housing inequality</li>\n</ul>\n\n<p>Your contribution, no matter how small, can make a big difference in the lives of families in need of housing.</p>\n\n<h3>Why Housing Matters:</h3>\n\n<p>Access to safe and stable housing is essential for the well-being of individuals and families. By providing affordable homes, we can help break the cycle of poverty and provide families with the foundation they need to build better lives.</p>\n\n<h3>Join Us Today:</h3>\n\n<p>Are you passionate about making a difference in the lives of those in need of housing? Join us today in our mission to provide shelter and support to families living in poverty.</p>\n\n<p>To learn more about how you can get involved or to make a donation, visit our website or contact us directly.</p>\n\n\n<p>Shortlink: <a href=\"https://ivolunteervietnam.com?p=82830\">https://ivolunteervietnam.com?p=82830</a></p>\n', '2023-06-15', '2023-06-15'),
(23, 1, 'ABC', NULL, '1234', '2024-04-26', '2024-04-26'),
(24, 1, 'ABC', NULL, '1234', '2024-04-26', '2024-04-26'),
(25, 1, 'Test', NULL, 'Testing....', '2024-04-26', '2024-04-26'),
(27, 5, 'ABC', NULL, '1234', '2024-04-26', '2024-04-26'),
(30, 5, 'ABCDEF', NULL, '12345678', '2024-04-27', '2024-04-27'),
(31, 5, 'ABCDEF', NULL, '12345678', '2024-04-27', '2024-04-27'),
(32, 13, 'ABCDEFDER hello doraemon', NULL, '12345678', '2024-04-28', '2024-04-28'),
(33, 13, 'ABCDEFDER hello doraemon shizuka chaien', NULL, '12345678', '2024-04-28', '2024-04-28'),
(34, 19, 'lai mot lan nua la chia tay', 'https://image.vietnamnews.vn/uploadvnnews/Article/2022/2/9/199892_tntn1.jpg', 'The la xong roi ha ta, phai hocj tieng nhat that met moi', '2024-05-14', '2024-05-14'),
(35, 19, 'eqweqweqwe', 'http://res.cloudinary.com/deei5izfg/image/upload/v1715625118/Mobile/yjuchbptvmqc1fwzphzr.jpg', '<h1>qweqweqweqweq</h1><ul><li>qweqweqwe</li><li>qweqweqwe</li><li>qweqweqwe</li><li>qweqweqweqweqwe</li><li>qweqweqweqweqweqwe</li><li>qweqweqweqweqweqweqweqwe</li><li>qweqweqweqweqweqweqweqweqweqwe</li></ul><p><strong>qweqweqwe</strong></p>', '2024-05-14', '2024-05-14');

-- --------------------------------------------------------

--
-- Table structure for table `registrationforms`
--

CREATE TABLE `registrationforms` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `isConfirmed` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `registrationforms`
--

INSERT INTO `registrationforms` (`id`, `activity_id`, `user_id`, `isConfirmed`, `createdAt`) VALUES
(1, 1, 2, 2, '2024-05-05'),
(2, 2, 3, 0, '2024-05-05'),
(3, 8, 1, 1, '2024-05-05'),
(4, 8, 2, 1, '2024-05-05'),
(5, 5, 1, 1, '2024-05-13'),
(6, 7, 1, 0, '2024-05-13'),
(7, 4, 1, 0, '2024-05-13'),
(10, 8, 3, 2, '2024-05-25');

-- --------------------------------------------------------

--
-- Table structure for table `tabletasks`
--

CREATE TABLE `tabletasks` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tabletasks`
--

INSERT INTO `tabletasks` (`id`, `activity_id`, `name`, `color`, `createdAt`, `updatedAt`) VALUES
(1, 8, 'Lao Dong tay chan', '#FF5733', '2024-05-05', '2024-06-04'),
(2, 8, 'Luom rac bai bien', '#33FF57', '2024-05-05', '2024-06-04'),
(3, 8, 'Trong cay', '#3357FF', '2024-05-05', '2024-06-04'),
(5, 8, 'don dep rac duong pho shizuka nobita', '#FFFF33', '2024-05-05', '2024-06-04'),
(6, 8, 'don dep rac duong pho shizuka nobita doraemon', '#FF33FF', '2024-05-05', '2024-06-04'),
(7, 8, 'don dep rac duong pho', '#ff0066', '2024-05-16', '2024-06-04'),
(8, 8, 'don dep rac duong pho', '#ff0066', '2024-05-16', '2024-06-04'),
(9, 8, 'don dep rac duong pho', '#ff0066', '2024-05-16', '2024-06-04'),
(10, 8, 'don dep rac duong pho', '#ff0066', '2024-05-16', '2024-06-04');

-- --------------------------------------------------------

--
-- Table structure for table `taskcomments`
--

CREATE TABLE `taskcomments` (
  `id` int(11) NOT NULL,
  `comment_parent_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `taskcomments`
--

INSERT INTO `taskcomments` (`id`, `comment_parent_id`, `content`, `task_id`, `account_id`, `createdAt`, `updatedAt`, `isDeleted`) VALUES
(1, NULL, 'helllooooo', 1, 1, '2024-05-25', NULL, 0),
(2, NULL, 'sao the cau', 1, 6, '2024-05-25', NULL, 0),
(3, NULL, 'hi2134', 1, 6, '2024-05-25', '2024-05-25', 0),
(4, NULL, 'qweqweqwe', 1, 6, '2024-05-25', NULL, 0),
(5, NULL, 'qweqweqwe', 1, 6, '2024-05-25', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `table_task_id` int(11) DEFAULT NULL,
  `candidate_id` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `date_start`, `date_end`, `description`, `title`, `status`, `table_task_id`, `candidate_id`, `createdAt`, `updatedAt`) VALUES
(1, '2024-05-10', '2024-05-11', 'tong don ve sinh khu vuc', NULL, 2, 1, 9, NULL, '2024-06-04'),
(2, '2024-05-10', '2024-05-11', 'tong don ve sinh khu vuc', 'don ve sinh', 3, 1, 12, NULL, '2024-06-04'),
(3, '2024-05-10', '2024-05-11', 'tong don ve sinh khu vuc', 'don ve sinh', 1, 1, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `account_id` int(11) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `account_id`, `tel`, `address`, `gender`, `birthday`) VALUES
(1, 1, '0905116393', 'Quang Nam', 'male', '2024-05-13'),
(2, 2, '0123456789', 'Hoi An City', 'male', '2024-04-24'),
(3, 3, '0123456789', 'Da Nang city', 'male', '2024-04-24'),
(4, 4, '0123456789', 'Quang Nam province', 'male', '2024-04-24'),
(22, 36, '0123456789', 'Quang Tri province', 'male', '2024-04-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organization_id` (`organization_id`);

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Chats_ibfk_1_idx` (`sender_id`),
  ADD KEY `Chats_ibfk_2_idx` (`receiver_id`);

--
-- Indexes for table `deleteactivityforms`
--
ALTER TABLE `deleteactivityforms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DeleteActivityForms_ibfk_1_idx` (`activity_id`);

--
-- Indexes for table `likeposts`
--
ALTER TABLE `likeposts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `LikePosts_ibfk_1_idx` (`account_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `postcomments`
--
ALTER TABLE `postcomments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_parent_id` (`comment_parent_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `postcomments_ibfk_3_idx` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- Indexes for table `registrationforms`
--
ALTER TABLE `registrationforms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- Indexes for table `tabletasks`
--
ALTER TABLE `tabletasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- Indexes for table `taskcomments`
--
ALTER TABLE `taskcomments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_parent_id` (`comment_parent_id`),
  ADD KEY `task_id` (`task_id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `table_task_id` (`table_task_id`),
  ADD KEY `candidate_id` (`candidate_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `deleteactivityforms`
--
ALTER TABLE `deleteactivityforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `likeposts`
--
ALTER TABLE `likeposts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `postcomments`
--
ALTER TABLE `postcomments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `registrationforms`
--
ALTER TABLE `registrationforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tabletasks`
--
ALTER TABLE `tabletasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `taskcomments`
--
ALTER TABLE `taskcomments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `Activities_ibfk_1` FOREIGN KEY (`organization_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `candidates`
--
ALTER TABLE `candidates`
  ADD CONSTRAINT `Candidates_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Candidates_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `Chats_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Chats_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `deleteactivityforms`
--
ALTER TABLE `deleteactivityforms`
  ADD CONSTRAINT `DeleteActivityForms_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`);

--
-- Constraints for table `likeposts`
--
ALTER TABLE `likeposts`
  ADD CONSTRAINT `LikePosts_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `LikePosts_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `Notifications_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `postcomments`
--
ALTER TABLE `postcomments`
  ADD CONSTRAINT `postcomments_ibfk_1` FOREIGN KEY (`comment_parent_id`) REFERENCES `postcomments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `postcomments_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `postcomments_ibfk_3` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `registrationforms`
--
ALTER TABLE `registrationforms`
  ADD CONSTRAINT `RegistrationForms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `RegistrationForms_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`),
  ADD CONSTRAINT `RegistrationForms_ibfk_3` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tabletasks`
--
ALTER TABLE `tabletasks`
  ADD CONSTRAINT `TableTasks_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `taskcomments`
--
ALTER TABLE `taskcomments`
  ADD CONSTRAINT `TaskComments_ibfk_1` FOREIGN KEY (`comment_parent_id`) REFERENCES `taskcomments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `TaskComments_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `TaskComments_ibfk_3` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `Tasks_ibfk_1` FOREIGN KEY (`table_task_id`) REFERENCES `tabletasks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Tasks_ibfk_2` FOREIGN KEY (`candidate_id`) REFERENCES `candidates` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
