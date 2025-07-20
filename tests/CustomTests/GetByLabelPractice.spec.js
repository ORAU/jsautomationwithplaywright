const {test,expect}=require('@playwright/test');


test('Get ByLabel Practice workflow',async({page})=>{
await page.goto('https://rahulshettyacademy.com/angularpractice/');
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female"); 
await page.getByPlaceholder("Password").fill("Contrasena");
await page.locator('form input[name="name"]').fill("Orlando");
await page.locator('form input[name="email"]').fill("test_email@domain.com");
await page.getByRole("button",{name:'Submit'}).click();
});

