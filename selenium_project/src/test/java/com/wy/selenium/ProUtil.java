package com.wy.selenium;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ProUtil {
	/*
	 * 读取文件Properties 有三个属性：load (加载) setProperty(设置) getProperty(获取)
	 * 
	 * */
	private Properties prop;
	private String filepath;
	/*
	 * 构造方法
	 * */
	public ProUtil(String filepath){
		this.filepath = filepath;
		this.prop = readfile();
	}
	/*
	 * 读取配置文件
	 * */
	private Properties readfile(){
//		实例化
		Properties properties = new Properties();
//		读取文件后将其放到缓存里
		try {
			InputStream inputStream = new FileInputStream(filepath);
			BufferedInputStream in = new BufferedInputStream(inputStream);	
			properties.load(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties;
	}
	/*
	 * 获取文件*/
	public String getPro(String key){
		if(prop.containsKey(key)){
			String username = prop.getProperty(key);
			return username;
		}else{
			System.out.println("你获取的key值有误");
			return "";
		}
	}
	

//	public static void main(String[] args) throws Exception{
//		ProUtil pro = new ProUtil();
//		pro.gerPro();
//	}

}
