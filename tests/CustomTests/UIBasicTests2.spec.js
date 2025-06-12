const {test,expect}=require('@playwright/test');


test('Validating combobox and checkboxes',async({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const usernameTxt=page.locator('#username');
const passwordTxt=page.locator('#password');
const loginBtn=page.locator('#login');
const dropdown=page.locator('select.form-control');
await dropdown.selectOption('consult');
await page.locator('.radiotextsty').last().click();
await page.locator('#okayBtn').click();
console.log(await page.locator('.radiotextsty').last().isChecked());
await expect(page.locator('.radiotextsty').last()).toBeChecked();
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
expect(await page.locator('#terms').isChecked()).toBeFalsy();
//Complete the form
await usernameTxt.fill('rahulshettyacademy');
await passwordTxt.fill('learning');


await loginBtn.click();

});

test.only('Using different window tabs',async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const usernameTxt=page.locator('#username');
const passwordTxt=page.locator('#password');
const documentLink=page.locator("[href*='documents-request']");
const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    documentLink.click()
]);
const text=await newPage.locator(".red").textContent();
const arrayTexts=text.split("@");
const domain=arrayTexts[1].split(" ");
console.log(domain[0]);
await usernameTxt.fill(domain[0]);
await passwordTxt.fill('learning');
await page.pause();
});