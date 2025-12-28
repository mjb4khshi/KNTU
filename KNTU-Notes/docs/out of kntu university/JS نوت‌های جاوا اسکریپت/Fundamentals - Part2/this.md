# واژه کلیدی this
## در آبجکت ها
در آبجکت ها این کلمه کلیدی به آبجکت فعلی اشاره دارد
در واقع هاردکدینگ رو کاهش میده و کد یا متد یا تابع ما رو عمومی تر میکنه.
مثال:
```js
const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};
```
اینجا ما از this.mass استفاده کردیم به جای mark.mass و در واقع اون واژه کلیدی با اسم آبجکتی که درونشه عوض میشه.
