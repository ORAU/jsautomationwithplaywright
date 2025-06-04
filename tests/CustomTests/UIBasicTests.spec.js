const {test,expect}=require('@playwright/test');
test('Login Form-Validating error message-bad credentials ',async({browser})=>{
const context= await browser.newContext();
const page= await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const username=page.locator("[id='username']");
const password=page.locator("[id='password']");
const signIn= page.locator("[id='signInBtn']");
await username.fill("Test");
await password.fill("password");
await signIn.click();
let currentText=await page.locator("[style='display: none']").textContent();
console.log(currentText);
//expect(currentText).toContain('Incorrect');
// could be written with another type of assertion like:

await expect(page.locator("[style='display: none']")).toContainText('Incorrect');
//Login and continue to the next page
await username.fill("");
await username.fill("rahulshettyacademy");
await password.fill("learning");
await signIn.click();
const labels= page.locator(".card-body a");
console.log("Text: "+await labels.nth(1).textContent());
const productLabels=await labels.allTextContents();
//Printing list of elements
console.log("List of elements (titles): "+productLabels);
});

test('Validating page title',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    let title= await page.title();
    expect(title).toContain("Login");
});