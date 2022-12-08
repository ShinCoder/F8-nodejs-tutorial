-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2022 at 06:11 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `f8_education_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `videoId` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(50) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`_id`, `name`, `description`, `image`, `videoId`, `createdAt`, `updatedAt`, `slug`, `deleted`, `deletedAt`) VALUES
(1, 'Kiến Thức Nhập Môn IT', 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.', 'https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg', 'M62l1xA5Eu8', '2022-12-08 16:56:24', '2022-12-08 16:56:24', 'kiến-thức-nhập-môn-it', NULL, NULL),
(2, 'HTML CSS từ Zero đến Hero', 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.', 'https://img.youtube.com/vi/R6plN3FvzFY/sddefault.jpg', 'R6plN3FvzFY', '2022-12-08 16:57:02', '2022-12-08 16:57:02', 'html-css-từ-zero-đến-hero', NULL, NULL),
(3, 'Responsive Với Grid System', 'Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.', 'https://img.youtube.com/vi/uz5LIP85J5Y/sddefault.jpg', 'uz5LIP85J5Y', '2022-12-08 16:57:23', '2022-12-08 16:57:23', 'responsive-với-grid-system', NULL, NULL),
(4, 'Lập Trình JavaScript Cơ Bản', 'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.', 'https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg', '0SJE9dYdpps', '2022-12-08 16:57:47', '2022-12-08 16:57:47', 'lập-trình-javascript-cơ-bản', NULL, NULL),
(5, 'Lập Trình JavaScript Nâng Cao', 'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...', 'https://img.youtube.com/vi/MGhw6XliFgo/sddefault.jpg', 'MGhw6XliFgo', '2022-12-08 16:58:03', '2022-12-08 16:58:03', 'lập-trình-javascript-nâng-cao', NULL, NULL),
(6, 'Làm việc với Terminal & Ubuntu', 'Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.', 'https://img.youtube.com/vi/7ppRSaGT1uw/sddefault.jpg', '7ppRSaGT1uw', '2022-12-08 16:58:30', '2022-12-08 16:58:30', 'làm-việc-với-terminal-&-ubuntu', NULL, NULL),
(7, 'Xây Dựng Website với ReactJS', 'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.', 'https://img.youtube.com/vi/x0fSBAgBrOQ/sddefault.jpg', 'x0fSBAgBrOQ', '2022-12-08 16:58:51', '2022-12-08 16:58:51', 'xây-dựng-website-với-reactjs', NULL, NULL),
(8, 'Node & ExpressJS', 'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web. ', 'https://img.youtube.com/vi/z2f7RHgvddc/sddefault.jpg', 'z2f7RHgvddc', '2022-12-08 16:59:10', '2022-12-08 16:59:10', 'node-&-expressjs', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
