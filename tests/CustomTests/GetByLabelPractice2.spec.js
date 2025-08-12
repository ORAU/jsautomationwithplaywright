const {test,expect}=require('@playwright/test');


test('Get By Practice 2',async({page})=>{
const email = "usuario.ok.test@gmail.com";
const productName ="ZARA COAT 3";
const password ="Password1";
const products = page.locator(".card-body");
await page.goto('https://rahulshettyacademy.com/client');
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill(password);
await page.getByRole('button',{name:'Login'}).click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
await page.locator(".card-body").filter({hasText:productName}).getByRole('button',{name:"Add to Cart"}).click();
await page.getByRole("listitem").getByRole("button",{name:"  Cart "}).click();
//await page.pause();
await page.locator("div li").first().waitFor();
await expect(page.getByText(productName)).toBeVisible();
await page.getByRole("button", { name: "Checkout" }).click();
//await page.getByPlaceholder().fill();
//await page.getByRole("link",{name:'Shop'}).click();

});

