package com.wy.selenium;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

/*
 * 第一步是初始化driver 很重要
 * 判断元素是否在界面上，如不在界面上通常有几种方式定位，perform()
 * 
 * */

@Listeners({TestngListenerScreenShot.class})
public class Login extends baseDriver{

//	等待
	public void sleep(int sleeptime){
		try {
			Thread.sleep(sleeptime);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
//	初始化driver
	public void InitDriver(){
		System.setProperty("webdriver.chrome.driver","F:\\java\\chromedriver_win32\\chromedriver.exe" );
		driver = new ChromeDriver();
		driver.get("http://www.imooc.com");
		driver.manage().window().maximize();
		driver.findElement(By.id("js-signin-btn")).click();
	}

//	登录
	public void loginScript(String username,String userpwd) throws Exception{
		this.InitDriver();
		this.sleep(2000);
		WebElement user = this.element(this.byStr("username"));
		user.isDisplayed();
		WebElement pwd = this.element(this.byStr("userpwd"));
		pwd.isDisplayed();
		WebElement login_btn = this.element(this.byStr("login_btn"));
		login_btn.isDisplayed();
		user.sendKeys(username);
		pwd.sendKeys(userpwd);
		login_btn.click();
		this.sleep(3000);
		WebElement header = this.element(this.byStr("header"));
		header.isDisplayed();
//		该元素只有当hover的时候才出现，要引入actions.moveToElement将元素显示后才能获取到
		Actions actions = new Actions(driver);
//		perform()不能忘
		actions.moveToElement(header).perform();
		String userInfo = driver.findElement(this.byStr("nameInfo")).getText();
		if(userInfo.equals("媛猿")){
			this.takeScreenShot();
			System.out.println("登录成功");
		}else{
			System.out.println("登录失败");
		}
		driver.close();
		
	}
	
	/*
	 * 封装By
	 * */
	public By byStr(String username){
		ProUtil properties = new ProUtil("element.properties");
		String locator = properties.getPro(username);
		String locatorType = locator.split(">")[0];
		String locatorValue = locator.split(">")[1];
		if(locatorType.equals("id")){
			return By.id(locatorValue);
		}else if(locatorType.equals("name")){
			return By.name(locatorValue);
		}else if(locatorType.equals("className")){
			return By.className(locatorValue);
		}else if(locatorType.equals("linkText")){
			return By.linkText(locatorValue);
		}else if(locatorType.equals("tagName")){
			return By.tagName(locatorValue);
		}else if(locatorType.equals("partialLinkText")){
			return By.partialLinkText(locatorValue);
		}else if(locatorType.equals("cssSelector")){
			return By.cssSelector(locatorValue);
		}else{
			return By.xpath(locatorValue);
		}
	}
	
	/*
	 * 封装Element
	 * */
	public WebElement element(By by){
		WebElement ele =  driver.findElement(by);
		return ele;
	}
	
//	@Test
//	public void loginpage() throws Exception{
//		this.loginScript("943403782@qq.com", "wang202123***");
//	}
	
//	主入口
	public static void main(String[] args) throws Exception{
		Login as = new Login();
		HashMap<String,String> user = new HashMap<String,String>();
		user.put("943403782@qq.com", "wang202123***");
//		user.put("13184770843", "wang202123");
//		迭代器
		Iterator us = user.entrySet().iterator();
		while(us.hasNext()){
			Map.Entry entry = (Map.Entry) us.next();
			String username = entry.getKey().toString();
			String password = entry.getValue().toString();
//			System.out.println(username+"密码"+password);
			as.loginScript(username, password);
		}
	}
	

}
