package com.wy.selenium;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class baseDriver {
	WebDriver driver;
	public baseDriver(){
		System.setProperty("webdriver.chrome.driver","F:\\java\\chromedriver_win32\\chromedriver.exe" );
		driver = new ChromeDriver();
	}
	/*
	 * 截图
	 * */
	public void takeScreenShot(){
		long date = System.currentTimeMillis();
		String path = String.valueOf(date);
//		获取系统当前路径
		String curPath = System.getProperty("user.dir");
		path = path+".png";
		String screenPath = curPath+"/"+path;
		File screen = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try{
			FileUtils.copyFile(screen,new File(screenPath));
		}catch(IOException e){
			e.printStackTrace();
		}
	}
}
