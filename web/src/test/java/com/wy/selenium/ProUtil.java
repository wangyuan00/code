package com.wy.selenium;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ProUtil {
	/*
	 * ��ȡ�ļ�Properties ���������ԣ�load (����) setProperty(����) getProperty(��ȡ)
	 * 
	 * */
	private Properties prop;
	private String filepath;
	/*
	 * ���췽��
	 * */
	public ProUtil(String filepath){
		this.filepath = filepath;
		this.prop = readfile();
	}
	/*
	 * ��ȡ�����ļ�
	 * */
	private Properties readfile(){
//		ʵ����
		Properties properties = new Properties();
//		��ȡ�ļ�����ŵ�������
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
	 * ��ȡ�ļ�*/
	public String getPro(String key){
		if(prop.containsKey(key)){
			String username = prop.getProperty(key);
			return username;
		}else{
			System.out.println("���ȡ��keyֵ����");
			return "";
		}
	}
	

//	public static void main(String[] args) throws Exception{
//		ProUtil pro = new ProUtil();
//		pro.gerPro();
//	}

}
