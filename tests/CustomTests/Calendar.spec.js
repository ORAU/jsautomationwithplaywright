const{test,expect}=require('@playwright/test');
test ('Calendar Test Validation',async({page})=>{
const monthNumber="9";
const dayNumber="15";
const yearNumber="2025";
await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
await page.locator(".react-date-picker__inputGroup").click();

await page.locator(".react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from").click();
await page.locator(".react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from").click();
//Selecting year
await page.getByText(yearNumber).click();
//Selecting month   
//
await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click(); 
//Selecting day
})