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
 * ��һ���ǳ�ʼ��driver ����Ҫ
 * �ж�Ԫ���Ƿ��ڽ����ϣ��粻�ڽ�����ͨ���м��ַ�ʽ��λ��perform()
 * 
 * */

@Listeners({TestngListenerScreenShot.class})
public class Login extends baseDriver{

//	�ȴ�
	public void sleep(int sleeptime){
		try {
			Thread.sleep(sleeptime);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
//	��ʼ��driver
	public void InitDriver(){
		System.setProperty("webdriver.chrome.driver","F:\\java\\chromedriver_win32\\chromedriver.exe" );
		driver = new ChromeDriver();
		driver.get("http://www.imooc.com");
		driver.manage().window().maximize();
		driver.findElement(By.id("js-signin-btn")).click();
	}

//	��¼
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
//		��Ԫ��ֻ�е�hover��ʱ��ų��֣�Ҫ����actions.moveToElement��Ԫ����ʾ����ܻ�ȡ��
		Actions actions = new Actions(driver);
//		perform()������
		actions.moveToElement(header).perform();
		String userInfo = driver.findElement(this.byStr("nameInfo")).getText();
		if(userInfo.equals("��Գ")){
			this.takeScreenShot();
			System.out.println("��¼�ɹ�");
		}else{
			System.out.println("��¼ʧ��");
		}
		driver.close();
		
	}
	
	/*
	 * ��װBy
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
	 * ��װElement
	 * */
	public WebElement element(By by){
		WebElement ele =  driver.findElement(by);
		return ele;
	}
	
//	@Test
//	public void loginpage() throws Exception{
//		this.loginScript("943403782@qq.com", "wang202123***");
//	}
	
//	�����
	public static void main(String[] args) throws Exception{
		Login as = new Login();
		HashMap<String,String> user = new HashMap<String,String>();
		user.put("943403782@qq.com", "wang202123***");
//		user.put("13184770843", "wang202123");
//		������
		Iterator us = user.entrySet().iterator();
		while(us.hasNext()){
			Map.Entry entry = (Map.Entry) us.next();
			String username = entry.getKey().toString();
			String password = entry.getValue().toString();
//			System.out.println(username+"����"+password);
			as.loginScript(username, password);
		}
	}
	

}
