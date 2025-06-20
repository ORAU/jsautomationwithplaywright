const {test,expect}=require('@playwright/test');


test('Basic purchase workflow',async({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const usernameTxt=page.locator('#username');
const passwordTxt=page.locator('#password');
const loginBtn=page.locator('#signInBtn');
const dropdown=page.locator('select.form-control');
await dropdown.selectOption('consult');
await page.locator('.radiotextsty').last().click();
await page.locator('#okayBtn').click();
console.log(await page.locator('.radiotextsty').last().isChecked());

//Complete the form
await usernameTxt.fill('rahulshettyacademy');
await passwordTxt.fill('learning');
await loginBtn.click();
page.pause();
const cardsTitles=page.locator(".card-title");
const cardsButtons=page.locator(".card-footer button");
await page.waitForURL('**/angularpractice/shop');
const selectedItem="iphone X";
const numberOfItems=await page.locator(".card-title").count();
const numberOfButtons=await page.locator(".card-footer button").count();
console.log("Number of elements: "+numberOfItems);
console.log("Number of buttons: "+numberOfButtons);
//Search for a specific item
page.pause();
for(let i=0;i<numberOfItems;i++){
    console.log(i);
    if(await cardsTitles.nth(i).locator("a").textContent()===selectedItem){
       await cardsButtons.nth(i).click();        
       console.log("Entró al bucle y encontró elemento");
       page.pause();
       break;
    }
    else{
        console.log("Entró al bucle y no encontró elemento. Texto: "+await cardsTitles.nth(i).locator("a").textContent());
    }
}

const checkoutButton=page.locator("a.nav-link.btn.btn-primary");
await checkoutButton.scrollIntoViewIfNeeded();
await checkoutButton.click();
const checkoutButton2=page.locator("span.glyphicon.glyphicon-shopping-cart");
await expect(checkoutButton2).toBeEnabled();


});

