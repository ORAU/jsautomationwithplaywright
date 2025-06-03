const {test,expect}=require('@playwright/test');
test('Login Form-Validating error message-bad credentials ',async({browser})=>{
const context= await browser.newContext();
const page= await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.locator("[id='username']").fill("Test");
await page.locator("[id='password']").fill("password");
await page.locator("[id='signInBtn']").click();
let currentText=await page.locator("[style='display: none']").textContent();
console.log(currentText);
//expect(currentText).toContain('Incorrect');
// could be written with another type of assertion like:

await expect(page.locator("[style='display: none']")).toContainText('Incorrect');
});

test('Validating page title',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toContainText('LoginPage');
});