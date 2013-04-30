package com.michalvich.cucumber.selenium.example;

import static org.junit.Assert.assertTrue;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import cucumber.annotation.pt.Dado;
import cucumber.annotation.pt.Entao;
import cucumber.annotation.pt.Quando;

public class GoogleSearchScenario {

	private WebDriver driver = new HtmlUnitDriver();

	@Dado("^que eu abra a página \"([^\"]*)\"$")
	public void the_page_is_open(String page) throws Throwable {
		driver.get(page);
	}

	@Quando("^eu busco por \"([^\"]*)\"$")
	public void I_search_for(String search) throws Throwable {
		WebElement element = driver.findElement(By.name("q"));
		element.sendKeys(search);
		element.submit();
	}

	@Entao("^o título da página deveria conter \"([^\"]*)\"$")
	public void a_browser_title_should_contains(String text) throws Throwable {
		assertTrue(driver.getTitle().contains(text));
	}

}
