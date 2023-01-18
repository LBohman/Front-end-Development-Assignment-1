# Komputer Store
*Create a Dynamic Webpage using JS*

This was an assignment to build a dynamic webpage using "vanilla" JavaScript.
The website consists of three modules:
1. **The Bank** – an area where you will store funds and make bank loans in this application
2. **Work** – an area to increase your earnings and deposit cash into your bank balance
3. **Laptops** – an area to select and display information about the merchandise

## 1. The Bank
### 1.1 Balance
The bank shows a “Bank” balance in your currency. This is the amount available for you to buy a laptop.
### 1.2 Outstanding Loan (Only visible after taking a loan)
Shows the outstanding Loan value. This should be reduced as loan paid back.
### 1.3 Get a loan
The Get a loan button will attempt to get a loan from the bank. When the Get a loan button is clicked, it must show a “Prompt” popup box that allows you to enter an amount.
> Constraints on Get a loan button:
1. You *cannot* get a loan more than double of your bank balance (*i.e.* if you have 500 you cannot *cannot* get a loan greater than 1000.)
2. You *cannot* get more than one bank loan before repaying the last loan
3. You may not have two loans at once. The initial loan should be paid back in full

## 2. Work
### 2.1 Pay
The pay or your current salary amount in your currency. Should show how much money you have earned by “working”. This money is NOT part of your bank balance.
### 2.2 Bank Button
The bank button must transfer the money from your Pay/Salary balance to your Bank balance. Remember to reset your pay/salary once you transfer.
> Constraints on Bank button:
1. If you have an outstanding loan, 10% of your salary MUST first be deducted and transferred to the outstanding Loan amount
2. The balance after the 10% deduction may be transferred to your bank account
### 2.3 Work Button
The work button must increase your Pay balance at a rate of 100 on each click.
### 2.4 Repay Loan Button
Once you have a loan, a new button labeled “Repay Loan” should appear. Upon clicking this button, the full value of your current **Pay** amount should go towards the outstanding loan and NOT your bank account.
Any remaining funds after paying the loan may be transferred to your bank account.
## 3. Laptops
The laptops section has 2 parts: laptop selection area (Figure 3) and info section (Figure 4).
### 3.1 Laptop Selection
Use a select box to show the available computers. The feature list of the selected laptop must be displayed here. Changing a laptop should update the user interface with the information for that selected laptop.
### 3.1.1 Laptop API
The data for the laptops will be provided to you via a RESTful API that returns JSON data.
The endpoint for the API is: https://hickory-quilled-actress.glitch.me/computers
The endpoint will return an array of computers, each computer will have the following properties:
`
{
"id": 1,
    "title": "Classic Notebook",
    "description": "A little old, but turns on.",
    "specs": [
    "Has a screen",
    "Keyboard works, mostly",
    "32MB Ram (Not upgradable)",
    "6GB Hard Disk",
    "Comes with Floppy Disk Reader (Free) - Requires cable",
    "Good exercise to carry"
    ],
    "price": 200,
    "stock": 1,
    "active": true,
    "image": "assets/images/1.png"
}
`
### 3.2 Info Section
The info section is where the image, name, and description as well as the price of the laptop must be displayed.
The buy now button is the final action of your website. This button will attempt to “Buy” a laptop and validate whether the bank balance is sufficient to purchase the selected laptop. 
If you do not have enough money in the “Bank”, a message must be shown that you cannot afford the laptop. 
When you have sufficient “Money” in the account, the amount must be deducted from the bank and you must receive a message that you are now the owner of the new laptop!

