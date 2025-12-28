# سلکت کردن یک عنصر در فایل HTML با آیدی یا کلاس یا نوع
```js
const input = document.querySelector('.guess');
```
در پرانتر میشه نوع یا آیدی هم گذاشت دقیقا مثل سلکت در سی اس اس
```js
const input = document.querySelector('.guess').textContent;
```
با این روش هم محتوای متنی درون المان و عنصر مورد نظرمون رو سلکت میکنیم.
```js
const input = document.querySelector('.guess').textContent = 'salam';
```
با این حرکت هم متن عنصر مورد نظر رو ویرایش میکنیم.
```js
document.querySelector('.input').value = 23;
```
برای سلکت کردن مقدار درون اینپوت باید از پراپرتی value استفاده کرد.