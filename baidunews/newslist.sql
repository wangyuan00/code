-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-30 10:55:10
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidu`
--

-- --------------------------------------------------------

--
-- 表的结构 `newslist`
--

CREATE TABLE IF NOT EXISTS `newslist` (
  `newsId` int(10) NOT NULL AUTO_INCREMENT,
  `newsTitle` varchar(20) NOT NULL,
  `newsDate` varchar(20) NOT NULL,
  `newsContext` varchar(100) NOT NULL,
  `newsUrl` varchar(100) NOT NULL,
  `newsSrc` varchar(100) NOT NULL,
  `newsLabel` varchar(10) NOT NULL,
  `newsOperate` varchar(10) NOT NULL,
  PRIMARY KEY (`newsId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `newslist`
--

INSERT INTO `newslist` (`newsId`, `newsTitle`, `newsDate`, `newsContext`, `newsUrl`, `newsSrc`, `newsLabel`, `newsOperate`) VALUES
(1, '习近平检阅中国人民解放军驻香港部队', '2017-06-01', '习近平检阅中国人民解放军驻香港部队', './1.jpg', '百科', '0', ''),
(2, '总理考察辽宁说的这些话，不光让辽宁受益', '2017-06-01', '总理考察辽宁说的这些话，不光让辽宁受益', './1.jpg', '百度', '0', ''),
(3, '20年 香港被“狂飙的祖国”带着飞跑', '2017-06-01', '20年 香港被“狂飙的祖国”带着飞跑', './2.jpg', '百度', '0', ''),
(4, '2020年中国实现5G商用，2025年用', '2017-06-01', '2020年中国实现5G商用，2025年用户将破4亿', './3.jpg', '百度', '0', ''),
(5, '直击茅台10万年薪招工体测：没人能躺着把', '2017-06-01', '直击茅台10万年薪招工体测：没人能躺着把钱赚了', './4.JPEG', '百度', '0', ''),
(6, '西瓜打针变甜、螃蟹注胶增重?专家现场实验', '2017-06-01', '西瓜打针变甜、螃蟹注胶增重?专家现场实验击破谣言', './5.JPEG', '百度', '0', ''),
(7, ' iPhone8今年销量超过1亿部？苹果', '2017-06-01', '\niPhone8今年销量超过1亿部？苹果要直面哪些困境', './8.JPEG', '百度', '1', ''),
(8, ' 摩拜纵深抓运营，ofo扩张求规模，共享', '2017-06-01', '\n摩拜纵深抓运营，ofo扩张求规模，共享单车是慈航增量vs存量优先？', './8.JPEG', '百度', '2', ''),
(9, ' 香奈儿起诉三十多位亚马逊卖家侵权，获赔', '2017-06-01', '\n香奈儿起诉三十多位亚马逊卖家侵权，获赔300万美元', './7.JPEG', '百度', '3', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
