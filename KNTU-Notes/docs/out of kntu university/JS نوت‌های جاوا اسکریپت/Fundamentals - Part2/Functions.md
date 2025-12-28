# توابع در جاوا اسکریپت
تابع یک مقدار به حساب میاد سر همون میشه توی متغیر ذخیرش کرد.
## function declarations
**این نوع تابع حتی میتونه قبل اینکه تعریف بشه فراخوانی بشه برعکس بقیه**
تابع در جی اس سه بخش مهم داره
1- پارامتر- در بدنه تابع مثل متغیر رفتار میکند در واقع موقع فراخوانی تابع دریافت میشود.
2-بدنه تابع
3-مقدار بازگشتی
نحوه تعریف به شکل زیر:
 ```js
 function fruitJuice(apples, oranges){
 const juice =`Juice with ${apples} apples and ${oranges} oranges.`};
 return juice;
 }
 
 
 
fruitJuice(5, 0); //Juice with 5 apples and 0 oranges.
  ```
---
## expression function
```js
 const fruitJuice = function (apples, oranges){
 const juice =`Juice with ${apples} apples and ${oranges} oranges.`};
 return juice;
 }
 
 
 
fruitJuice(5, 0); //Juice with 5 apples and 0 oranges.
 ```
 حتما حواست باشه این نوع تابع رو قبل فراخوانی تعریف کنی 
** انتخاب شخصیه که از کدوم نوع استفاده کنی.**
## Arrow functions
 ```js
const fruitJuice = apples => `Juice with ${apples} apples.`;

console.log(fruitJuice(3));
 ```
### حالت پیچیده تر با کد بیشتر:
```js
 const fruitJuice =  apples => {
 const juice =`Juice with ${apples} apples.`};
 return juice;
 }
 ```
### پارامتر بیشتر:
```js
const fruitJuice =  (apples, oranges) => {
 const juice =`Juice with ${apples} apples and ${oranges} oranges.`};
 return juice;
 }
```

#بسیار_مهم
**وقتی آرایه رو با const تعریف میکنی، خود آرایه غیر قابل تعویضه ولی میشه اعضاشو ویرایش کرد، در واقع اون غیر قابل تغییر بودن روی مقادیر بدویه نه چیزی مثل آرایه**
